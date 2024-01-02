require('dotenv').config()

const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/', (req, res) => {
    res.send("WORKS")
})

app.listen(process.env.PORT, () => {console.log(`Listen on PORT ${process.env.PORT}`)})