const express = require('express')
const router = express.Router()
const Category = require('../models/category')


router.get('/', async(req,res) => {
    try{
           const categorys = await Category.find()
           res.json(categorys)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.get('/:id', async(req,res) => {
    try{
           const  categorys= await Category.findById(req.params.id)
           res.json(categorys)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const categorys = new Category({
        id: req.body.id,
        name: req.body.name
    })

    try{
        const a1 =  await Category.create(req.body) 
        res.json(a1)
    }catch(err){
        res.send('Error ' + err)
    }
})



module.exports = router