const users = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.registerController = async (req,res) =>{
    console.log('Inside registerController');
    const {name,email,password,phone} = req.body
    const existingUser = await users.findOne({email})
    if(existingUser){
        res.status(406).json('Already registered with this email')
    }else{
        try{
            const newUser = await users.create({name,email,password,phone})
            newUser.save()
            res.status(200).json(newUser)
        }catch(err){
            res.status(401).json(err)
        }
    }
}

exports.loginController = async(req,res) =>{
    const {email,password} = req.body
    console.log('Inside LoginController');
    try{
    const existingUser = await users.findOne({email,password})
    if(existingUser){
        const token = jwt.sign({userId:existingUser._id},process.env.JWTPASSWORD)
        res.status(200).json({user:existingUser,token})
    }else{
        res.status(406).json("Incorrect mail or password!!")
    }
}catch(err){
    res.status(401).json(err)
}
}

exports.allUsersController = async(req,res) =>{
    console.log('Inside allUsersController');
    try{
        const allUsers = await users.find().select('-password')
        res.status(200).json(allUsers)
    }catch(err){
        res.status(401).json(err)
    } 
}

exports.LoggedUserDetailsController = async(req,res) =>{
    const userId = req.userId
    try{
        const userDetails = await users.findById({_id:userId}).select('-password')
        res.status(200).json(userDetails)
    }catch(err){
        res.status(401).json(err)
    }
}