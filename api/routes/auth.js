import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

// router.get("/", (req,res)=>{
//     res.send("Hello , this is auth endpoint")
// })

// router.get("/register", (req,res)=>{
//     res.send("this is register endpoint");
// })

//create user
router.post("/register", register);

// login 
router.post("/login", login )

export default router;