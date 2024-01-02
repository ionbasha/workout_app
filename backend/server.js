require('dotenv').config()

const express = require('express')
const routes = require('./routes/workouts')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts',routes)

// connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('success')
    })
    .catch(error => {
        console.log(error)
    })

app.listen(process.env.PORT, () => {console.log(`Listen on PORT ${process.env.PORT}`)})