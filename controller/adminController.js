import User from '../models/userModel.js'
import Doctor from '../models/doctorModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const adminlogin=async (req,res)=>{
const {email,password}=req.body
const admin = await User.findOne({email})
if(!admin){
    res.status(400).json({message:"invalid credential"})
}
const isValidPass = await bcrypt.compare(password,admin.password)
if(!isValidPass){
    res.status(400).json({message:"invalid credential"})
}
const token = jwt.sign({id:admin._id,role:admin.role},process.env.SECRET)
res.cookie("token",token)
res.json({message:"success"})
}
export const CreateDoctor= async (req,res)=>{
    try{

        const {name,email,password,about,phone,fees,qualification,title,image,specialization}=req.body
        const isExist =await  Doctor.findOne({email})
        if(isExist){
       return res.status(400).json({message:"already exist"})
    }
    const pass= await bcrypt.hash(password,10)
    const createdDoctor = await Doctor.create({
        name,email,password:pass,about,phone,fees,qualification,title,image,specialization
    })
    res.json({message:"user created"})
}
catch(err){
   
    res.status(400).json({message:"error",err})
}
}
export const allDoctor = async(req,res)=>{
    try{

        const doctor = await Doctor.find()
        res.status(200).json({message:"doctors",doctor})
    }
    catch(err){
        res.status(400).json({message:"error",err})
        
    }
}
export const deleteDoctor = async(req,res)=>{
    try{

        const {id}= req.params
        const response = await Doctor.findByIdAndDelete(id)
        res.status(200).json({message:"deleted"})
    }
    catch(err){
        res.json({message:"err",err})
    }
}