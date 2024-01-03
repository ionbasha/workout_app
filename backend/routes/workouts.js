const express = require('express')
const { newWorkout, getAllWorkouts, getOneWorkout } = require('../controllers/workout_controller')

const router = express.Router()

// GET all workouts
router.get('/', getAllWorkouts)

// GET one workout
router.get('/:id', getOneWorkout);

// POST new workout
router.post('/', newWorkout)

// DELETE workout
router.delete('/', (req, res) => {
    res.send("DELETE")
})

// PATCH workout
router.patch('/', (req, res) => {
    res.send("PATCH")
})
module.exports = router