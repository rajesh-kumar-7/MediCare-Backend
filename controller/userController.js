import User from "../models/userModel.js";
import appointments from "../models/appointment.js";
import Doctor from "../models/doctorModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
export const createUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      name,
      email,
      phone,
      password: hashPass,
    });
    res.json({ message: "user created" });
  } catch (err) {

    res.json({ message: " server error", err });
  }
};
export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      res.status(400).json({ message: "User not exist" });
    }

    const pass = existedUser.password;
    const isValid = await bcrypt.compare(password, pass);
   
    if (!isValid) {
      res.status(400).json({ message: "invalid credential" });
    }
    const token = jwt.sign(
        {id:existedUser._id,
          role:existedUser.role
        },
        
        process.env.SECRET,
        {expiresIn:"7d"}
    )
    res.cookie("token",token)
    res.json({
        message:"user login successful",
    })

  }
  catch(err){
    res.status(400).json({message:"error",err})
    


  }
};
export const bookAppointment  = async (req,res)=>{
  try{
    const userid = req.user.id
    const {doctorid,slotDate,slotTime,amount,cancelled,payment,isComplete} =req.body
    const resapp = await appointments.create({
      userid,doctorid,slotDate,slotTime,amount,cancelled,payment,isComplete
    })
    res.status(200).json({message:"Appointment booked"})

  }
  catch(err){
    res.status(400).json({message:"error",err})
  
  }
}
export const allDoctors= async (req,res)=>{
  const docs = await Doctor.find()
  res.json({message:"fetch done",doctors:docs})
}
export const DocDetails = async (req,res)=>{
  try{

    const id=req.params.id
    const Doc = await Doctor.findById(id)
    res.status(200).json(Doc)
  }
  catch(err){
    res.status(400).json({message:"error",err})
  }
}
export const Logout = async (req,res)=>{
  res.clearCookie("token")
  res.json({message:"user logout"})
}
export const MyAppointment = async(req,res)=>{
  try{

    const token = req.cookies.token
    const decode = jwt.verify(token,process.env.SECRET)
    const userAppointment = await appointments.find({userid:decode.id}).populate("doctorid")
    res.status(200).json({message:"fetch done",userAppointment})
  }
  catch(err){
    console.log(err)
    res.status(400).json({message:"error"})
  }


}
export const cancelAppointment= async(req,res)=>{
  try{

    const {id}= req.params
    const cancel = await appointments.findByIdAndUpdate(id,{cancelled:true})
    res.status(200).json({message:"Appointment Cancelled"})
  }
  catch(err){
    res.status(400).json({message:"error",err})

  }
  
}