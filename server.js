// connection to server
const serverConfig=require('./configs/server_configs')
const dbConfig=require('./configs/db_configs')
const express=require('express')
const app=express()
const mongoose=require('mongoose')

//connection to database
mongoose.connect(dbConfig.DB_URL)
const db=mongoose.connection

db.on('error',()=>{
console.log('error while connecting to db')
})
db.once('open',()=>{
console.log('connected to database')
})

app.listen(serverConfig.PORT,()=>{
    console.log('server connected to port:',serverConfig.PORT)
})