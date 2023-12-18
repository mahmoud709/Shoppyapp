import { Schema, model } from "mongoose";

const signup = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "you must should write FirstName"],
    minLength: 3,
    maxLength: 10,
  },
  lastName: {
    type: String,
    required: false,
    minLength: 2,
    maxLength: 10,
  },
  email: {
    type: String,
    trim: true,
    unique: [true, "email is already exists"],
    required: [true, "you must write your email"],
  },
  phone: {
    type: String,
    trim: true,
    unique: [true, "phone number is already use"],
  },
  profileImg: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    trim: true,
    minLength: 6,
    required: [true, "you must set password"],
  },
  confirmPassword: {
    type: String,
    required: [true, "you must confirm your password"],
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'owner'],
    default: 'user'
  },
  orders:[
    {
      type: Schema.Types.ObjectId,
    }
  ]
},{timestamps:true});

export const newuser =model("user", signup);