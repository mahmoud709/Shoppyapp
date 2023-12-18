import jwt from "jsonwebtoken";
import { statusCodes, successMsg } from "../utils/Status.js";

export const verifyToken=async(req,res,next)=>{
    const {authorization}=req.headers;
    if(authorization){
        const token = authorization.split(" ")[1];
        try{
            const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decodeToken;
            next()
        }
        catch(err){
            res.status(statusCodes.errCode).json({ success: successMsg.failed, message: "Invalid Token" })
        }
    }
    else {
        res.status(statusCodes.errCode).json({ success: successMsg.failed, message: "no token provided,please login" })
    }
}

// Verify Token & admin
export const verifyTokenAndAdmin=async (req,res,next)=>{
    verifyToken(req,res,()=>{
        const { role } = req.user;
        if(role === 'admin'){
            next();
        }
        else{
            res.status(statusCodes.denied).json({ success: successMsg.failed, message: 'You are not authorized,access denied' })
        }
    })
}