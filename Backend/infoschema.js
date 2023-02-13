

const mongoose = require('mongoose');

const contactShema = mongoose.Schema({
    firstname: {
        type: String,
        // required: true,  
    },
    lastname:{
        type:String,
        // required:true
    },
    contact:{
        type:Number,
        // required:true
    },
    email:{
        type:String,
        // required:true
    },
    message:{
        type:String,
        // required:true
    }

})

module.exports = mongoose.model("contact", contactShema)