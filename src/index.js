const express = require('express')
const mongoose = require('mongoose')
const router = require('./router')

const app = express()

app.use(express.json())

router(app)



mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://aquinoignacio:jugador12@primerpracticacoder.doozgmp.mongodb.net/?retryWrites=true&w=majority', error => {
    if(error){
        console.log(`Cannot connect to db. Error ${error}`)
    }
})

module.exports = app