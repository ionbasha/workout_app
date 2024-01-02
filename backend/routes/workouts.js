const express = require('express')
const Workout = require('../models/workout_schema')

const router = express.Router()

// GET all workouts
router.get('/',(req, res) => {
    res.json("GET ALL")
})

// GET one workout
router.get('/:id', (req, res) => {
    res.send("GET ONE")
})

// POST new workout
router.post('/', async (req, res) => {
    const { name, reps, sets } = req.body
    
    try {
        const newWorkout = await Workout.create({name, reps, sets})
        res.status(200).json(newWorkout )
    }
    catch(e) {
        res.status(400).json({error: e.message})
    }
})

// DELETE workout
router.delete('/', (req, res) => {
    res.send("DELETE")
})

// PATCH workout
router.patch('/', (req, res) => {
    res.send("PATCH")
})
module.exports = router