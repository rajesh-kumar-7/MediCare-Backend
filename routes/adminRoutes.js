import express from "express"
import { adminlogin,CreateDoctor ,allDoctor,deleteDoctor} from "../controller/adminController.js"
import {protect} from "../middleware/protect.js"
import { adminOnly } from "../middleware/Role.js"
const adminrouter=express.Router()
adminrouter.post('/login',adminlogin)
adminrouter.post('/addDoctor',protect,adminOnly,CreateDoctor)
adminrouter.get('/allDoctor',protect,adminOnly,allDoctor)
adminrouter.delete('/deleteDoctor/:id',protect,adminOnly,deleteDoctor)
export default adminrouter