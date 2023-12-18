
import {categoryModel} from '../models/category.js';

export const addCategory=async (req,res)=>{
    const {name,code}=req.body;
    try{
        await categoryModel.create({name,code});
        res.status(201).json({
            message:'Catogry added Successfully'
        })
    }
    catch(err){
        res.status(401).json(err)
    }
}
export const getCategories=async(req,res)=>{
    const query=categoryModel.find();
    let allCategories=await query;
    try{
        res.status(201).json({allCategories})
    }
    catch(err){
        res.status(401).json({
            message:err
        })
    }
}