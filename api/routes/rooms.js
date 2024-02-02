import  express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room";

const router = express.Router();

//create room
router.post("/:hotelid", verifyAdmin, createRoom);

// update room
router.put("/:id", verifyAdmin, updateRoom);

// delete room
router.delete("/:id", verifyAdmin, deleteRoom );

// get Room
router.get("/:id", getRoom);

// get all room
router.get("/", getRooms);


export default router;