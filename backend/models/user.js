const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id : {
        type : String,
        //required : true
    },
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('users',userSchema)