import { newuser } from "../models/signup.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { statusCodes, successMsg } from "../utils/Status.js";
import  asyncHandler  from 'express-async-handler';
export const signup = async (req, res) => {
  const { firstName, lastName, email, phone, password, confirmPassword } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashPass = bcrypt.hashSync(password, salt);
  const createUser = await newuser.create({
    firstName,
    lastName,
    email,
    phone,
    password: hashPass,
    confirmPassword: hashPass,
  });

  res.status(200).json({
    message: 'account created successfully',
    data: {
      createUser
    }
  })
}

export const Login = asyncHandler(async (req, res) => {
  const { email, phone, password } = req.body;
  // Finding user in DB
  const userInfo = await newuser.findOne({ $or: [{ email }, { phone }] });
  // handle user is not found
  if (!userInfo) {
    return res.status(statusCodes.successCode).json({ success: successMsg.failed, message: "Invalid credentials" });
  }
  // Compare passwords
  const validPass = await bcrypt.compare(password, userInfo.password);
  if (!validPass) {
    return res.status(statusCodes.successCode).json({ success: successMsg.failed, message: "Invalid credentials" });
  }
  const tokenData = {
    id: userInfo._id,
    role: userInfo.role
  }
  const token = jwt.sign({ ...tokenData }, process.env.JWT_SECRET, {
    expiresIn: '60d',
  });
  res.status(statusCodes.successCode).json({ success: successMsg.success, message: "Login Success", token })
})