import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import cookieParser from "cookie-parser";
import roomsRoute from "./routes/rooms.js";


const app = express();
dotenv.config();


mongoose.connect(process.env.MONGO_URL).then(() => console.log('Connected to MongoDB'))
 .catch(err => console.error('Failed to connect to MongoDB', err));

mongoose.connection.on("disconnected", ()=>{
  console.log("mongodb disconnected")
})

mongoose.connection.on("connected" , ()=>{
  console.log("mongodb connected")
})

app.get("/", (req,res)=>{
    res.send("hello there from our first request");
    console.log("hello from first request");
    
})

//for json data
app.use(express.json());

// cookies middleware
app.use(cookieParser())



//middleware
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);


app.use((err, req, res, next)=>{
      const errorStatus = err.status || 500;
      const errorMessage = err.message || "Something went wrong!";
      // return res.status(500).json("Hello err from handler")
      return res.status(errorStatus).json({
        success : false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
      })
} )

app.listen(5000, () => {
    console.log("Connected to backend! Listening on port 5000");
  });
