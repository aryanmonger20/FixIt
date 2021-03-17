const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.get('/', async(req,res) => {
    try{
           const users = await User.find()
           res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.get('/:id', async(req,res) => {
    try{
           const  users= await User.findById(req.params.id)
           res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const users = new User({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    try{
        const a1 =  await User.create(req.body) 
        res.json(a1)
    }catch(err){
        res.send('Error ' + err)
    }
})



module.exports = router