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
   
 try{
   
    const userName=req.query.name;
 const userList=await userModel.find({})
 if(userList.length<0){
   return res.status(404).send({
        message:'user not present'
    })
 }
 else{
    let filteruser=userList.filter((el)=>el.name.toLowerCase().includes(userName.toLowerCase()))
   return res.status(200).send(filteruser)
 }
 }
 catch(err){
    res.status(500).send({
        message:"error while finding the user "
    })
 }
 
}