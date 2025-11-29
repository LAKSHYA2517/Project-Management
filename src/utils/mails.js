import Mailgen from "mailgen";

const emailVerificationMailContent=(username,
verificationUrl)=>{
    return{
       body:{
        name:username,
        intro:"Welcome to our App! We'are excited to have you on board!!!",
        action:{
            instruction:"To verify email please clicke on the following button",
            button:{
                color:"#22bc66",
                text:"Verify your email",
                link:verificationUrl,
            },
        },
        outro:"Need help,or have question? Just reply to this email,we'd love to help.",
       }, 
    };
};

const forgotPasswordMailgenContent=(username,
passwordResetUrl)=>{
    return{
       body:{
        name:username,
        intro:"We got a request to reset the password of your account",
        action:{
            instruction:"To reset your password click on the following button or link",
            button:{
                color:"#22bc90",
                text:"Verify your email",
                link:verificationUrl,
            },
        },
        outro:"Need help,or have question? Just reply to this email,we'd love to help.",
       }, 
    };
};

export{
    emailVerificationMailContent,
    forgotPasswordMailgenContent
}