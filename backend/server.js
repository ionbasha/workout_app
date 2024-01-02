require('dotenv').config()

const express = require('express')

const app = express()

const routes = require('./routes/workouts')

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts',routes)

app.listen(process.env.PORT, () => {console.log(`Listen on PORT ${process.env.PORT}`)})