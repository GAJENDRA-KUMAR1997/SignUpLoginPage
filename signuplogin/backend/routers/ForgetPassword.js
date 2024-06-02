const express = require("express");
const router = express.Router();
const Student = require("../models/Student.js");
router.post("/forgetpassword",async(req,res)=>{
    const Email = req.body.Email;
    try {
        let data = await Student.findOne({Email });
        //console.log(data);
        console.log(data.MobileNumber);
        if(data.MobileNumber == req.body.MobileNumber){
            console.log("I am inside if")
            let response = await Student.findOneAndUpdate(
                {Email:Email},
                {$set :{DOB : req.body.DOB}},
                {new:true}
            )
            console.log(response);
            res.json({success : true});
        }
        else{
            res.json({success:false});
        }
    }
    catch(err){
        res.json({success:false});
        console.log(err);
    }
})


module.exports = router;