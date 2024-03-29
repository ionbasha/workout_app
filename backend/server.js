require('dotenv').config()

const express = require('express')
const routesWorkout = require('./routes/workouts')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts',routesWorkout)

// connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('success')
    })
    .catch(error => {
        console.log(error)
    })

app.listen(process.env.PORT, () => {console.log(`Listen on PORT ${process.env.PORT}`)})