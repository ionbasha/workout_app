const Workout = require('../models/workout_schema')
const mongoose = require('mongoose')

// GET all
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({})

    res.status(200).json(workouts)
}


// GET one
const getOneWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json("No workout found.")
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(400).json("No document found.")
    }

    res.status(200).json(workout)
}


// POST new workout
const newWorkout = async (req, res) => {
    const { name, reps, sets } = req.body
    
    try {
        const newWorkout = await Workout.create({name, reps, sets})
        res.status(200).json(newWorkout)
    }
    catch(e) {
        res.status(400).json({error: e.message})
    }
}


// DELETE new workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json("No workout exists")    
    }

    const workout = await Workout.findOneAndDelete({ _id: id })

    if(!workout) {
        return res.status(404).json("No such workout")
    }

    res.status(200).json(`Deleted ${id}`)
}


// PATCH an existing workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json("No workout exists")
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout) {
        return res.status(404).json("No such workout")
    }

    response.status(200).json(`Updated ${id}`)
     
}



module.exports = {
    newWorkout,
    getAllWorkouts,
    getOneWorkout,
    updateWorkout,
    deleteWorkout
}