import mongoose from "mongoose"
const DoctorSchema =  new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:"Doctor"
    },
    about:String,
    phone:String,
    fees:String,
    qualification:String,
    title:String,
    image:String,
    specialization:String


})
const Doctor = mongoose.model("doctor",DoctorSchema)
export default Doctor