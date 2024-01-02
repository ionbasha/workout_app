const express = require('express')

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
router.post('/', (req, res) => {
    res.send("POST")
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