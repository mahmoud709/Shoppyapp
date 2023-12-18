import { newuser } from "../models/signup.js"
import  asyncHandler  from 'express-async-handler';
import { statusCodes } from "../utils/Status.js";

export const getusers=async (req,res)=>{
    const allUsers=await newuser.find({});
    res.status(200).json({
        data:allUsers
    })
}

export const profile = asyncHandler(async (req, res) => {
    const { id } = req.user;
    const userProfile = await newuser.findById(id)
        .select('-password -confirmPassword')
    if (!userProfile) {
        return res.status(statusCodes.errCode).json({ success: statusCodes.errCode, message: 'user is not found' });
    }
    res.status(statusCodes.successCode).json({ success: statusCodes.successCode, message: 'user profile', data: userProfile })
})