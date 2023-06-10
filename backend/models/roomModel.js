import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    temp: {type: Number, required: true},
    humid: {type: Number, required: true},
    gas: {type: Number, required: true},
    door: {type: Number, required: true},
    light: {type: Number, required: true}
});

const roomModel = mongoose.model("Room", roomSchema);

export default roomModel;