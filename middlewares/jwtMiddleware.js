const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next) =>{
    console.log('inside jwtMiddleware');
    const token = req.headers['authorization'].split(" ")[1]
    console.log(token);
    if(token!=''){
        try{
            const jwtResponse = jwt.verify(token,process.env.JWTPASSWORD)
            console.log(jwtResponse);
            req.userId = jwtResponse.userId
            next()
        }catch(err){
            res.status(401).json(err)
        }
    }else{
        res.status(404).json("Token not found")
    }
    
}

module.exports = jwtMiddleware