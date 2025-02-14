import express from 'express';
import Workout from '../models/Workout.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: "Welkom op de homepage van onze website"});
})

router.get('/:id', (req, res) => {
    res.json({ msg: "workout met id ophalen"});
})

router.post('/', async (req, res) => {
    const { title, load, reps } = req.body;
    try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
    });
    

export default router;