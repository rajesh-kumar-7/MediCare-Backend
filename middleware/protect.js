import jwt from "jsonwebtoken"
export const protect =(req,res,next)=>{
    const token= req.cookies.token
    if(!token){
        res.status(400).json({message:"user not login"})
    }
    const decode = jwt.verify(token,process.env.SECRET)
    req.user=decode
    next()

}