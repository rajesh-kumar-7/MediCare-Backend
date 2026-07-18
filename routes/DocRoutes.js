import express from "express"
import {DocLogin,allAppointment,update} from '../controller/DoctorController.js'
const DocRouter= express.Router()
DocRouter.post("/login",DocLogin)
DocRouter.get("/allAppointment",allAppointment)
DocRouter.put("/update/:id",update)
export default DocRouter