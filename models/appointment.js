import mongoose from 'mongoose'
const appointmentSchema = new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    doctorid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"doctor"
    },
    slotDate:String,
    slotTime:String,
    amount:String,
    cancelled:{
        type:Boolean,
        default:false
        },
    payment:{
        type:Boolean,
        default:false
        },
    isComplete:{
        type:Boolean,
        default:false
        }

        })
const appointments= mongoose.model('appointment',appointmentSchema)
export default appointments