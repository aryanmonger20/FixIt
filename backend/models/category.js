const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    id : {
        type : Number,
        required : true
    },
    name : {
        type : String,
        required : true,
        trim : true
    }
})

module.exports = mongoose.model('categorys',categorySchema)