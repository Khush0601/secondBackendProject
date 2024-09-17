const userController=require('../controllers/user.controller')
module.exports=(app)=>{
    app.post('/backendProject/api/v1/user/createUser',userController.createUser)
    app.get('/backendProject/api/v1/getUser',userController.findUser)
}