import express from "express"
import cors from "cors"

const app=express();

//basic config
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

//cors config
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http:localhost:5173",
    credentials:true,
    methods:["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders:["Content-Type","Authorization"],
}))
//import the routes
import healthCheckRouter from "../src/routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";


app.use("/api/v1/healthcheck",healthCheckRouter)
app.use("/api/v1/auth",authRouter)

app.get("/",(req,res)=>{
    res.send("Welcome to basecampy!!");
})
//AI
// Global error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";
    
    res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message: message,
        data: err.data || null,
        error: message
    });
});

export default app