const userModel = require("../models/user.model")

exports.createUser=async(req,res)=>{
    try{
   const userObj={
    name:req.body.name,
    location:req.body.location,
    contact:req.body.contact,

   }
   const savingUser=await userModel.create(userObj)
   res.status(201).send(savingUser)
   
    }
    catch(err){
        console.log('error while creating user')
        res.status(500).send({
            message:"error while creating user"
        })
    }
}

exports.findUser=async(req,res)=>{
 const userName=req.body;
 const savedUser=await userModel.findOne({userName:userName})
 if(!savedUser){
    res.status(401).send({
        message:'user not present'
    })
 }
 
}