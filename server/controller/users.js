import { newuser } from "../models/signup.js"

export const getusers=async (req,res)=>{
    const allUsers=await newuser.find({});
    res.status(200).json({
        data:allUsers
    })
}