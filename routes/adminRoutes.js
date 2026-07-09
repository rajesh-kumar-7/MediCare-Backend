import express from "express"
import { adminlogin,CreateDoctor ,allDoctor,deleteDoctor} from "../controller/adminController.js"
const adminrouter=express.Router()
adminrouter.post('/login',adminlogin)
adminrouter.post('/addDoctor',CreateDoctor)
adminrouter.get('/allDoctor',allDoctor)
adminrouter.delete('/deleteDoctor/:id',deleteDoctor)
export default adminrouter