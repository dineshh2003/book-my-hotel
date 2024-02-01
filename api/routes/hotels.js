import  express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getAllHotel, hotel, updateHotel } from "../controllers/hotel.js";

const router = express.Router();

// router.get("/hotel1", (req, res) =>{
//     res.send("hello there from the hotels section");
// })

// router.get("/hotel2", (req, res) =>{
//     res.send("hello there from the hotels2 section");
// })

//create
// in "/:id" we can pass as a parameter
// router.post("/", async(req, res)=>{
//     const newHotel = new Hotel(req.body);
//     try {
//         const savedHotel = await newHotel.save();
//         res.status(200).json(savedHotel);
//     } catch (error) {
//         res.status(500).json(err);
//     }
// })

router.post("/", createHotel);

// UPDATE
// router.put("/:id", async(req, res)=>{
//     try {
//         const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
//         res.status(200).json(updatedHotel);
//     } catch (error) {
//         res.status(500).json(err);
//     }
// })
router.put("/", updateHotel);



// Delete
// router.delete("/:id", async(req, res)=>{
//     try {
//         await Hotel.findByIdAndDelete(req.params.id);
//         res.status(200).json("Hotel has been deleted");
//     } catch (error) {
//         res.status(500).json(err);
//     }
// })
router.delete("/:id", deleteHotel);




//GET
// router.get("/:id", async(req, res)=>{
//     try {
//         const Hotel = await Hotel.findById(req.params.id);
//         res.status(200).json("Hotel");
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })
router.get("/:id", hotel);





// get all hotels
// router.get("/", async(req, res)=>{
//     // const failed = true;
//     // if(failed) return next(createError( 401, "You are not authenicated"));

//     try {
//         const getAllHotel = await Hotel.findById("djhkhbfdbfdkshjvba");
//         res.status(200).json(getAllHotel);
//     } catch (err) {
//         // res.status(500).json(err);
//         return next(err);
//     }
// })
router.get("/", getAllHotel);



export default router;