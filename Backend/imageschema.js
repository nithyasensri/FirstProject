

const mongoose = require('mongoose');

const imageschema = mongoose.Schema({

  val:{
    type:String,
  },

  Name: {
    type: String,
},
// Age: {
//     type: Number,
//     required: true,
// },
// City: {
//     type: String,
//     required: true,
// },

// CreatedTime: {
//     type: Date,
//     default: Date.now
// },

fileName: {
    type: String,
},

Quantity: {
    type: Number,
},

FixRupees:{
  type: Number,
},

Rupees: {
    type: Number,
},

path: {
    type: String,
}


})

module.exports = mongoose.model("Image", imageschema)