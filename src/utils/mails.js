import Mailgen from "mailgen";
import nodemailer from "nodemailer"

const sendEmail=async(options)=>{
    const mailGenerator=new Mailgen({
        theme:"default",
        product:{
            name:"Task Manger",
            link:"https://taskmangerlink.com"
        }
    })

    
    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent)
    const emailHtml = mailGenerator.generate(options.mailgenContent)

    const transporter=nodemailer.createTransport({
        host:process.env.MAILTRAP_SMTP_HOST,
        port:process.env.MAILTRAP_SMTP_PORT,
        auth:{
            user:process.env.MAILTRAP_SMTP_USER,
            pass:process.env.MAILTRAP_SMTP_PASS,
        }
    })

    const mail={
        from:"mail.raskmanager@example.com",
        to:options.email,
        subject:options.subject,
        text:emailTextual,
        html:emailHtml
    }

    try{
        await transporter.sendMail(mail)
    }catch(error){
        console.error("Email service Failed silently<Make sure you have provided your mail Trap credential in .env file")
        console.error("Error: ",error)
    }
}



const emailVerificationMailContent=(username,
verificationUrl)=>{
    return{
       body:{
        name:username,
        intro:"Welcome to our App! We'are excited to have you on board!!!",
        action:{
            instructions:"To verify email please click on the following button",
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
                text:"Reset password",
                link:passwordResetUrl,
            },
        },
        outro:"Need help,or have question? Just reply to this email,we'd love to help.",
       }, 
    };
};

export{
    emailVerificationMailContent,
    forgotPasswordMailgenContent,
    sendEmail
}