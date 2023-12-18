import { newuser } from "../models/signup.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
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

export const login = async (req, res) => {
  const { email, password } = req.body;
  const existuser = await newuser.findOne({ email });
  let comparePassword;
  if (existuser) {
    comparePassword = bcrypt.compareSync(password, existuser.password);
  }
  if (!existuser || !comparePassword) {
    return res.status(400).json({
      message: "Email or password is invalid",
    });
  }
  let token = jwt.sign({ id: existuser._id, email: existuser.email }, process.env.JWT_SECRET);

  res.header("token", token)
  res.status(200)
    .json({
      message: "success",
      token,
    });
}
