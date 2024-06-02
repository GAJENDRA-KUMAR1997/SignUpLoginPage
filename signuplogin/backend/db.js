const mongoose = require("mongoose");
const URI = "mongodb+srv://gajendrakumar325:gprradha%40123@cluster0.ovbdyjy.mongodb.net/FOODZONEMERN?retryWrites=true&w=majority&appName=Cluster0";
mongoose.set('strictQuery', false);
const mongodb = async() =>{
    await mongoose.connect(URI,{useNewUrlParser:true},(err,result)=>{
        if(err){
            console.log("Not Connected",err);
        }
        else{
            console.log("Database is Connected");
        }
    })
}

module.exports = mongodb;