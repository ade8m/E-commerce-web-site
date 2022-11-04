import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authroute from "./Routes/auth.js"
import hotelroute from "./Routes/hotel.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();


const connect = async () =>{ 

try{
    
    await mongoose.connect(process.env.mongo);
    console.log("connected to mongoDB.")
}   catch (error){
    throw error;
}
};

//middellwar

app.use(cookieParser);
app.use(express.json());
app.use("/auth", authroute);
app.use("/hotel",hotelroute);


app.use((err,req,res,next) =>{
    const errorStatus = error.status || 500;
    const errorMessage = error.message ||"something wrong!";
    return res.status(errorStatus).json({
        success:false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


app.listen(3000,()=>{
    connect();
console.log("connected to backend!");
});

