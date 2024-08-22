//TO use the .env variables process.env.Var_name
require('dotenv').config()
const workoutroutes = require('./Routes/workoutroutes')

const express = require('express')
const mongoose = require('mongoose')

//creating the express app instance
const app = express()

//this is the middleware it runs on all requests call then by using the next it goes to the next defined route
//this line is used to add body object in the request object for post/patch requests
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//importing routes
app.use('/workouts',workoutroutes)

//connecting mongo db using the uri from env
mongoose.connect(process.env.MONGO_URI)

//now we will start the express app on a certain defined port (PORT defined in .env file npm install dotenv)
app.listen(process.env.PORT, () => {
    console.log("App started")
})

