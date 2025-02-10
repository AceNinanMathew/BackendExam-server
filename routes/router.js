const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')

//register api
router.post('/register',userController.registerController)

//login api
router.post('/login',userController.loginController)

//display allusers
router.get('/allUsers',jwtMiddleware,userController.allUsersController)

//display logged user
router.get('/loggedUser',jwtMiddleware,userController.LoggedUserDetailsController)

module.exports = router