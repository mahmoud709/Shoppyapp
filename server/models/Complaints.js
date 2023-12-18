
import { Schema, model } from 'mongoose';
let Complaints = new Schema({
  firstName: {
    type: String,
    required: [true, "you must write your name"],
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: [true, "you must write your Email"],
  },
  phone: {
    type: String,
    required: [true, "you must write your phone"],
  },
  textcontent: {
    type: String,
    required: [true, "you must write your message"],
  },
},{timestamps:true});

export const usersComplaints= model("complaint", Complaints);