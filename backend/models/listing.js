const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    image:{
      type : String,
    }
  ,
  city:{
    type : String,
  },
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
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          //required: true
        }
      }
      
})

module.exports = mongoose.model('Listing',listingSchema)