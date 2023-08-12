const mongoose = require('mongoose');

const connect = async (dburl) =>{


    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try{

    await mongoose.connect(dburl,options)
    console.log("connected")

    }
    catch (err){
        console.log("err is err")
    }



}

module.exports = connect;