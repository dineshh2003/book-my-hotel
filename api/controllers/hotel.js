import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";


export const createHotel = async(req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        return   next(error);
    }
}


export const updateHotel = async(req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedHotel);
    } catch (err) {
       return  next(err);
    }
}


export const deleteHotel = async(req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
    } catch (err) {
       return  next(err);
    }
}


export const hotel = async(req, res, next) => {
    try {
        const Hotel = await Hotel.findById(req.params.id);
        res.status(200).json("Hotel");
    } catch (err) {
       return next(err);
    }
}




export const getAllHotel = async(req, res, next) => {
    try {
        const getAllHotel = await Hotel.findById("djhkhbfdbfdkshjvba");
        res.status(200).json(getAllHotel);
    } catch (err) {
       return next(err);
    }
}