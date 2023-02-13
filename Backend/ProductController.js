
const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const mongoose = require('mongoose');
const InfoRouter = require('./infoschema')
const ImgRouter = require('./imageschema')
const multer = require('multer');
const path = require('path')


/


// insert



router.post("/",  async (req, res) => {
    console.log(req);
    var data = new InfoRouter({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        contact: req.body.contact,
        messge: req.body.messge
    })
    await data.save();
    res.json("Success")
     console.log("suc");

})



// get
router.get("/", async (req, res) => {
    var findData = await InfoRouter.find();
    res.json(findData);
})




module.exports = router;
