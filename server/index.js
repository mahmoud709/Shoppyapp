import express from 'express';
import route from './Routes/routes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { errorHandler, notFound } from './Midleware/handleError.js';
dotenv.config({ path: "./config.env" });

const connect=async()=>{
    try{
        mongoose.connect(process.env.DBCOLLECTION);
        console.log('connected to DB Successfully');
    }
    catch(err){
        console.log('Error while connected to DB'+err);
    }
}

const app=express();

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',route)

app.all('*',(req,res)=>{
    res.send('Not found in server')
})
// Error Handler Midleware
app.use(notFound);
app.use(errorHandler);
app.listen(process.env.PORT,(req,res)=>{
    connect();
    console.log(`App is running at http:/localhost:${process.env.PORT}`)
})