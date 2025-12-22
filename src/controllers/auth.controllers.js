import {User} from "../model/user.models";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import { use } from "react";
import {emailVerificationMailContent, sendEmail} from "../utils/mails.js"


const generateAccessAndRefreshTokens=async(userId)=>{
    try{
        const user=await User.findById(userId)
        const accessToken=user.generateAccessToken();
        const refreshToken=user.generateRefreshTOken();

        user.refreshToken=refreshToken

        await user.save({validateBeforeSave: false})
        return {accessToken,refreshToken}
    }catch(error){
        throw new ApiError(
            500,
            "Something went wrong while generating Access Token"
        )
    }
}

const registerUser=asyncHandeler(async(req,res)=>{
    const{email,username,password,role}=req.body

    const existedUser=await User.findOne({
        $or:[{username},{email}]
    })

    if(existedUser){
        throw new ApiError(409,"User with email or username alredy exsist",[])
    }

    const user=await User.create({
        email,
        password,
        username,
        isEmailVerified:false
    })

    const {unHashedToken,hashedToken,tokenExpiry}=
    user.generatesTemporaryToken();

    user.emailVerificationToken=hashedToken
    user.emailVerificationExpiry=tokenExpiry

    await user.save({validateBeforeSave: false})

    await sendEmail(
        {
            email:user?.email,
            subject:"Please verify our email",
            mailgenContent:emailVerificationMailContent(
                user.username,
                `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/${unHashedToken}`
            ),
        }
    );

    const createdUser = await User.findById(user._id).select(
        "-password - refreshToken -emailVerificationToken -emailVerificationExpiry",
    );

    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering a user")
    }

    return res
        .status(201)
        .json(
            new ApiResponse(
                200,
                {user:createdUser},
                "User registered Succesfully and verification email has been sent successfully on your email",
            ),
        )

})

export{ registerUser};