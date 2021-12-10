const express=require("express");
const mongoose=require("mongoose");
const path=require("path");
const bodyparser=require("body-parser");
// const { copyFileSync } = require("fs");

const port=process.env.PORT||5000;

const app=express();

mongoose.connect("mongodb://localhost:27017/loginData").then(()=>{   //create a database if not exists
    console.log("connection successfull...");
}).catch((err)=>{
    console.log(err);
});

const loginSchema=new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    }
    ,
  email:{
      type: String,
      required: true,
      trim: true,
      lowercase: true
  }
  ,
  password:{
    type: Number,
    required: true,
    trim: true,
    lowercase: true
}
});

const loginCollection=new mongoose.model("loginCollection",loginSchema); //creating collections


app.use(express.static(__dirname));

app.use(bodyparser.urlencoded());
app.post("/signup",async(req,res)=>{
    try{
        let data=req.body;
        let findData=await loginCollection.findOne({email: req.body.email});
        if(findData== null){
        let document=new loginCollection(data);
        document.save();
        res.send(`welcome ${data.userName}, you have successfully singned up`);
        }
        else{
            throw error;
        }


    }
    catch(error){
        res.send("This email id already exists");

    }

    
    
})


app.post("/login",async (req,res)=>
{
    try{
        const getdata=await loginCollection.findOne({email: req.body.email});
        
        if(getdata==null){
            res.send("Do not have account...please signup first")
        }
        else if(getdata.userName!=req.body.userName.toLowerCase() || getdata.email!=req.body.email || getdata.password!=req.body.password){
            throw error;

        }
        else{
        res.send(`welcome ${req.body.userName}, you successfully logged in`);
        }

    }
    catch(error){
      res.send("Invalid credentials");
    }
})
app.listen(port,()=>{
    console.log("app started successfully...");
})