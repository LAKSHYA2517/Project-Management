import { body } from "express-validator";


const userRegisterValidator=()=>{
    return[
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is Required")
            .isEmail()
            .withMessage("Email is invalid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username is required")
            .isLowercase()
            .withMessage("Username must be in lower case")
            .isLength({min:3})
            .withMessage("Username must be atleat 3 character long"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is Required"),
            body("fullName")
            .optional()
            .trim()
    ]
}


const userLoginValidator=()=>{
    return[
        body("email")
            .optional()
            .isEmail()
            .withMessage("Email is invalid"),
        body("password")
            .notEmpty()
            .withMessage("PAssword is required")
    ]
}
export{
    userRegisterValidator,
    userLoginValidator
}