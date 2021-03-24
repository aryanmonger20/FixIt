const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    image:{
      type : String,
    }
  ,
  emailuser: {
        type : String,
    },
    title: {
        type : String,
        trim : true
    },
    price: {
        type : Number,
        
    },
    categoryId: {
        type : String,
   // required : true
    },
   description: {
      type : String,
      trim : true
  },
    contact:
    {   type : Number,
        
    },
    rating:{
      type:Number
    },
    totalRating:{
      type:Number
    },
    raters:{
      type:Number
    },

    location: {
       
        latitude: {
          type: Number,
          required: false
        },
        longitude:{
          type: Number,
          required: false
        }
      }
})

module.exports = mongoose.model('Listing',listingSchema)