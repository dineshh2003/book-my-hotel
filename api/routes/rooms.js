import  express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

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