import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
export const createUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      name,
      email,
      phone,
      password: hashPass,
    });
    res.json({ message: "user created" });
  } catch (err) {
    console.log(err);
    res.json({ message: " server error", err });
  }
};
export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      res.status(400).json({ message: "User not exist" });
    }

    const pass = existedUser.password;
    const isValid = bcrypt.compare(password, pass);
    if (!isValid) {
      res.status(400).json({ message: "invalid credential" });
    }
    const token = jwt.sign(
        {id:existedUser._id},
        process.env.SECRET,
        {expiresIn:"7d"}
    )
    res.cookie("token",token)
    res.json({
        message:"user login successful",
    })

  }
  catch(err){
    res.status(400).json({message:"error",err})
    console.log(err)


  }
};
