const mongoose = require('mongoose');

const donatelargeschema = mongoose.Schema({
    name: {
        type: String,
        require: true // Use require instead of require
    },
    usermail: {
        type: String,
        require: true // Use require instead of require
    },
    desc: {
        type: String,
        require: true // Use require instead of require
    },
    date: {
        type: Date,
        require:true
    },
    time: {
        type:String,
        require:true
    },
    address: {
        type: String,
        require: true // Use require instead of require
    },
    mobileno:{
        type:Number,
        require:true
    }
});

const donatelargemodel = mongoose.model('donatelarge', donatelargeschema);

module.exports = donatelargemodel;
