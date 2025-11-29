import mongoose from "mongoose";

const connectDB =async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ MongoDB connected");
        return connection;
    }catch(err){
        console.error("❌ MongoDB connection error",err.message)
        process.exit(1)
    }
}

export default connectDB;