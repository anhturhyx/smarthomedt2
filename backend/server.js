import express from 'express';
import {rooms} from './data.js';
import dotenv from 'dotenv';
import config from './config.js';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';
import bodyParser from "body-parser";
import roomRoute from './routes/roomRoute.js';

dotenv.config();

const mongodbUrl = config.MONGODB_URL
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true
}).catch(error => console.log(error.reason));


const app = express();
app.use(bodyParser.json());
app.use("/api/users",userRoute);
app.use("/api/info",roomRoute);

app.get("/api/rooms",(req,res) =>{
    res.send(rooms)
});


app.listen(5000,console.log('Listening to port:  ' + 5000));
// app.listen(5000,'192.168.43.234', function() {
//     console.log('Listening to port:  ' + 5000);
// });