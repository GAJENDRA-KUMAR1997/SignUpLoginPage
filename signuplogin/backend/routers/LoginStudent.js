const express = require("express");
const router = express.Router();
const Student = require("../models/Student.js");
const {body} = require("express-validator");
router.post("/log",async(req,res)=>{
    let Email = req.body.Email;
    try {
        let data = await Student.findOne({Email});
        if(!data){
            res.json({success:false});
        }
        else{
            if(data.DOB === req.body.DOB){
                res.json({success:true});
                console.log(data);
            }
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;