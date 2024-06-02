const express = require("express");
const router = express.Router();
const Student = require("../models/Student.js");
const {body} = require("express-validator");
router.post("/create",async(req,res)=>{
    try {
        await Student.create({
            FirstName:req.body.FirstName,
            MiddleName:req.body.MiddleName,
            LastName:req.body.LastName,
            FatherName:req.body.FatherName,
            MotherName:req.body.MotherName,
            Gender:req.body.Gender,
            DOB:req.body.DOB,
            RollNumber:req.body.RollNumber,
            StudentId:req.body.StudentId,
            StreetAddress:req.body.StreetAddress,
            Country:req.body.Country,
            State:req.body.State,
            District:req.body.District,
            City:req.body.City,
            ZipCode:req.body.ZipCode,
            Landmark:req.body.Landmark,
            MobileNumber:req.body.MobileNumber,
            AlternateNumber:req.body.AlternateNumber,
            ParentNumber:req.body.ParentNumber,
            Email:req.body.Email,
            AlternateEmail:req.body.AlternateEmail,
            ParentEmail:req.body.ParentEmail,  
        })
        res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }
})



module.exports = router;