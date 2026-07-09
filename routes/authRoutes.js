import express from "express"
import {createUser,LoginUser} from '../controller/userController.js'
const userRouter = express.Router()
userRouter.post('/signup',createUser)
userRouter.post('/login',LoginUser)

export default userRouter