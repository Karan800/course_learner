const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
require("dotenv").config();

const app = express()

const learnerRoute = require('./app/api/routes/learner')
const courseRoute = require('./app/api/routes/courses')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
app.set('secretKey','hdjsakfhdjsk')



app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/learner',learnerRoute)
//app.use('/course',learnerValidation, courseRoute)

const learnerValidation = (req, res,next) => {
    jwt.verify(req.headers['token'], req.app.get('secretKey'), 
    (err,decoded) =>{
        if(err){
            res.json({
                message: err
            })
        }
        next()
    })
}
app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/learner',learnerRoute)
app.use('/course',learnerValidation, courseRoute)

app.get('/home', (req,res) => {
    res.json({
        "APP": "JWT Based API Application",
        "message": "Successfully Running the Application"
    })
})

const mongoURI = "mongodb+srv://karann:suplex8007@cluster0.teszuyb.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoURI)
.then(() => {
    console.log("Successfully Conn to the Database")
})
.catch((err) => {
    console.log(err)
})

app.listen(process.env.PORT || 5000,() => {
    console.log("Successfully Running on the PORT: 5000")
})