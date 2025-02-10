const mongoose = require('mongoose')

const connectionString = process.env.DBCONNECTIONSTRING
mongoose.connect(connectionString).then(res=>{
    console.log('MongoDBAtlas Connected Successfully');
}).catch(err=>{
    console.log('MongoDB ATLAS Connection Failed');
    console.log(err);
})