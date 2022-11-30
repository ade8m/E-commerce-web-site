import User from "../modules/USER.js"
import bcrypt from  "bcryptjs"
import { createError } from "../utile/error.js";
import jwt from "jsonwebtoken";

export const registre = async (req,res,next) =>{
      try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);



          const newUser = new User({
              username:req.body.username,
              email:req.body.email,
              password:hash,
          })
          await newUser.save()
          res.status(200).send("User has been created")
      } catch (err) {
          next(err)
      }
}
export const login = async (req,res,next) =>{
    console.log("object1");
    try {

        const user = await User.findOne({username:req.body.username})
        if(!user) 
        return next(createError(404, "user not found"))
        const isPasswordCorrect = await bcrypt.compare(req.body.password,  user.password)
        console.log("object");
        if(!isPasswordCorrect) 

                 return next(createError(400,"wrong user"))
        console.log("object1");

        const token = jwt.sign({id: user._id,isAdmin:user.isAdmin},process.env.jwt);
        
        console.log("object2");

        return res
        .cookie("Access_token",token,{
            httpOnly:true,
        })
        .status(200).json(user);
    } catch (err) {
        console.log(err);
        next (err)
    }
}