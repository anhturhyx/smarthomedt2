import express from "express";
import Room from "../models/roomModel.js";

const router = express.Router();

router.post("/rooms", async (req,res) => {
    try {
        console.log(req.body)
        const room = new Room({
            id: req.body.id,
            name: req.body.name,
            temp: req.body.temp,
            humid: req.body.humid,
            gas: req.body.gas,
            door: req.body.door,
            light: req.body.light
        });
    
        const newRoom = await room.save();
        res.send(newRoom);
    }
    catch (error){
        res.send({msg: error.message});
    }   
})

export default router;