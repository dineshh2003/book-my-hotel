import  express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();


//verifying JWT token is working or not 
router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("hello user, you are authenitcated");
})

//verifying user by jwt token for deletion and updatation by unique id
router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
        res.send("hello user , you are logged in and you can now update or delete your account")
}) 



router.get("/check")
//update user
router.post("/", updateUser);

// delete user
router.delete("/", deleteUser);

//get user
router.get("/:id", getUser);

//get all user
router.get("/", getAllUser);


export default router;