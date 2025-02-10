require('dotenv').config()
const cors = require('cors')
const express = require('express')
const router = require('./routes/router')
require('./database/dbConnection')

const examServer = express()

examServer.use(cors())
examServer.use(express.json())
examServer.use(router)

const PORT = 3000 || process.env.PORT

examServer.listen(PORT,(req,res)=>{
    console.log(`Server started running at port ${PORT}`);
})

examServer.get('/',(req,res)=>{
    res.send('<h1>Server started Running</h1>')
})