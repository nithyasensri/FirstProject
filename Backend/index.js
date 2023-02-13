
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors');






app.use(morgan('dev'))
app.use(express.json());
app.use(cors());

const inforouter = require('./ProductController');
app.use("/contact",inforouter)


// app.use('/',(req,res)=>{
//     res.json("Kadavuley Kapathu")
// })



app.listen(3000, () => {
    console.log("server started on 3000")
})

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/carsales-contacts')
    .then(() => console.log('Connected!'));





