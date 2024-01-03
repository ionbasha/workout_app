const express = require('express')
const { newWorkout, getAllWorkouts, getOneWorkout, deleteWorkout, updateWorkout } = require('../controllers/workout_controller')

const router = express.Router()

// GET all workouts
router.get('/', getAllWorkouts)

// GET one workout
router.get('/:id', getOneWorkout);

// POST new workout
router.post('/', newWorkout)

// DELETE workout
router.delete('/:id', deleteWorkout)

// PATCH workout
router.patch('/:id', updateWorkout)

module.exports = router