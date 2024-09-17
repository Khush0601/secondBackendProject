const mongoose=require('mongoose')
const userSchema=new mongoose.Schema(
   {
    name:{
        type:String,
     required:true,
    },
    location:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
        unique:true,
        minLength:10,
    },
    // profileImage:{

    // }
   }
)
module.exports=mongoose.model('user',userSchema)