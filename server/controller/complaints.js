import { usersComplaints } from "../models/Complaints.js"
export const complaints=async (req,res)=>{
    const {firstName,lastName,email,phone,textcontent}=req.body;
    try{
    await usersComplaints.create({
        firstName,
        lastName,
        email,
        phone,
        textcontent,
        
    });
    res.status(201).json({
        data: "your message is sent",
    });
    }
    catch(err){
        res.status(404).json({
            data:err
        })
    }
}
export const getcomplaints= async (req,res)=>{
    const allComplaints=await usersComplaints.find();
    try{
        res.status(201).json({
            allComplaints
        })
    }
    catch(err){
        res.status(404).json({
            message:'No Complaints found'
        })
    }
}