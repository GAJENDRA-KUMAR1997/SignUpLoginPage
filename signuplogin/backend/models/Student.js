const mongoose = require("mongoose");
const {Schema} = mongoose;

const StudentSchema = new Schema({
    FirstName:{
        type:String,
        required : true,
    },
    MiddleName:{
        type:String,
        required : true,
    },
    LastName:{
        type:String,
        required : true,
    },
    FatherName:{
        type:String,
        required : true,
    },
    MotherName:{
        type:String,
        required : true,
    },
    Gender:{
        type:String,
        required : true,
    },
    DOB:{
        type:String,
    },
    RollNumber:{
        type:Number,
        required : true,
    },
    StudentId:{
        type:Number,
        required : true,
    },
    StreetAddress:{
        type:String,
        required : true,
    },
    Country:{
        type:String,
    },
    State:{
        type:String,
        required : true,
    },
    District:{
        type:String,
        required : true,
    },
    City:{
        type:String,
        required : true,
    },
    ZipCode:{
        type:Number,
        required : true,
    },
    Landmark:{
        type:String,
        required : true,
    },
    MobileNumber:{
        type:Number,
        required : true,
    },
    AlternateNumber:{
        type:Number,
        required : true,
    },
    ParentNumber:{
        type:Number,
        required : true,
    },
    Email:{
        type:String,
        required : true,
        unique:true,
    },
    AlternateEmail:{
        type:String,
        required : true,
    },
    ParentEmail:{
        type:String,
        required : true,
    },
});

module.exports = mongoose.model("students",StudentSchema);