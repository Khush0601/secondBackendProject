const mongoose=require('mongoose')
const userSchema=new mongoose.Schema(
    {
        name:{
        type:String,
        required:true,
        },
        email:{
            type:String,
            required:true,
            minlength:10,
            unique:true,
            lowercase:true
        },
        userId:{
            type:String,
            required:true,
            minlength:6,
        },
        password:{
            type:String,
            required:true,
            minlength:8
        },
        userType:{
            type:String,
            required:true,
           default:'CUSTOMER'
        },
        userStatus:{
            type:String,
            required:true,
             default:'APPROVED'
        },
        createdAt:{
          default:()=>{
            return Date.now()
          },
          immutable:true,
        },
        updatedAt:{
            default:()=>{
                return Date.now()
              }
        },
        immutable:false,
    }
)