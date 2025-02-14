import express from 'express';
import dotenv from 'dotenv';
import workoutRoutes from './routes/workoutRoutes.js'
import mongoose from 'mongoose';


dotenv.config();

const app = express();

app.use('/api/workouts', workoutRoutes)

app.listen(process.env.PORT, () => {
    console.log("de server draait op port", process.env.PORT);
    
})