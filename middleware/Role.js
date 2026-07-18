export const adminOnly=(req,res,next)=>{
    if(req.user.role !=="admin"){
        res.status(400).json({message:"only admin can access"})
    }
    next()
}
export const DoctorOnly = (req,res,next)=>{
    if(req.user.role!=="Doctor"){
        res.status(400).json({message:"only Doctor can accsess"})
    }
    next()
}