const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true,
    },
    sets: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Workout', workoutSchema)