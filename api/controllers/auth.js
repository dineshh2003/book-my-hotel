import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

// register new user
export const register = async(req, res, next)=>{
        // const bcrypt = require(bcrypt);
        const saltRounds = 10;
    try {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hash,
        })   
        await newUser.save();
        res.status(201).json("user has been created..");
    } catch (err) {
       return  next(err);
    }
}


// login 
export const login = async(req, res, next)=>{
    try{
        const user = await User.findOne({username:req.body.username});
        if(!user) return next(createError(404, "user not found"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) return next(createError(400, "password is Incorrect or username"));
        
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT);

        // cookies
        const {password, isAdmin, ...otherDetails} = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .json({...otherDetails});

} catch (err) {
    return next(err)
}
}