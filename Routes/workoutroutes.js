const express = require('express')

const router = express.Router()

//define the api endpoints like this by defining the route then adding a function req is used for request info and res is for response


router.get('/',(req,res)=>{
    res.json({msg:"get all workouts"})
})

router.get('/:id',(req,res)=>{
    res.json({msg:"get one workout"})
})

router.post('/',(req,res)=>{
    res.json({msg:"post a workouts"})
})


module.exports = router