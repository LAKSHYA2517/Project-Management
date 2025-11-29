import app from "./app.js"
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path:"../.env"
});

const port=process.env.PORT ||   3000;

console.log("MONGO_URL from env:", process.env.MONGO_URL);


connectDB()
    .then(()=>{
        app.listen(port,() =>{
        console.log(`Example app listening in port http://localhost:${port}`);
    });
    })
    .catch((err)=>{
        console.error("MongoDB connection error",err)
        process.exit(1)
    })

