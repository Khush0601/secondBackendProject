// connection to server
const serverConfig=require('./configs/server_configs')
const dbConfig=require('./configs/db_configs')
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser = require('body-parser')

// middleware
app.use(bodyParser.json())
// plugging the routes to server.js
require('./routes/user.routes')(app)
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