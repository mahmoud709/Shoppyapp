import { Schema, model } from "mongoose";

const category=new Schema({
    name:{
        type:String,
        required:[true,'You must write category name']
    },
    code:{
        type:String,
        required:false
    }
},{timestamps:true})

export const categoryModel = model("category", category);