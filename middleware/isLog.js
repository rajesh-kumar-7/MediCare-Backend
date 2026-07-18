export const isLogged = (req,res)=>{
    try{

        const token = req.cookies.token
        if(!token){
            return res.status(400).json({message:"not logged"})
        }
        else{
            return res.status(200).json({message:"allow"})
        }
    }
    catch(err){
        console.log(err)
       return res.status(400).json({message:"error",err})
    }

}