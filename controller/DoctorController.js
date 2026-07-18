import Doctor from '../models/doctorModel.js'
import appointment from '../models/appointment.js'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const DocLogin = async (req,res)=>{
    try{

        const {email,password} = req.body
        const isExist = await Doctor.findOne({email})
        if(!isExist){
            return res.status(400).json({message:"invalid credentials"})
        }
        const isValidPass = await bcrypt.compare(password,isExist.password)
        if(!isValidPass){
            return res.status(400).json({message:"invalid credentials"})
        }
        const token = jwt.sign({id:isExist._id,role:isExist.role},process.env.SECRET)
       res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "None",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});
        return res.status(200).json({message:"login"})
    }
    catch(err){
        res.status(400).json({message:"err",err})
        
    }
}
export const allAppointment= async (req,res)=>{
    try{
        const token = req.cookies.token
        const decode = jwt.verify(token,process.env.SECRET)
        const id=decode.id
        const appointments = await appointment.find({doctorid:id}).populate("userid","name email")    
        res.json({message:"done",appointments})

    }
    catch(err){
       res.status(400).json({message:"error"})

    }
}
export const update =async(req,res)=>{
    try{

        const {isComplete,cancelled}= req.body
        const {id} = req.params
        const response = await appointment.findByIdAndUpdate(id,{
            isComplete,cancelled
        })
        res.json({message:"done"})
    }
    catch(err){
        res.status(400).json({messasge:"error"})
    }
    

}