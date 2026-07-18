import express from "express"
import {createUser,LoginUser,bookAppointment,allDoctors,DocDetails,Logout,MyAppointment,cancelAppointment} from '../controller/userController.js'
import { protect } from "../middleware/protect.js"
import {isLogged} from "../middleware/isLog.js"
const userRouter = express.Router()
userRouter.post('/signup',createUser)
userRouter.post('/login',LoginUser)
userRouter.post('/bookAppointment',protect,bookAppointment)
userRouter.get('/allDoctor',protect,allDoctors)
userRouter.get('/me',isLogged)
userRouter.get('/Doctor/:id',DocDetails)
userRouter.get('/Logout',Logout)
userRouter.get('/MyAppointment',MyAppointment)
userRouter.put('/cancelAppointment/:id',cancelAppointment)

export default userRouter