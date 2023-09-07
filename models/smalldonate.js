const mongoose = require('mongoose');

const donatesmallschema = mongoose.Schema({
    itemname: {
        type: String,
        require: true // Use require instead of require
    },
    usermail: {
        type: String,
        require: true // Use require instead of require
    },
    itemdesc: {
        type: String,
        require: true // Use require instead of require
    },
    created: {
        type: Date,
        require:true
    },
    address: {
        type: String,
        require: true // Use require instead of require
    },
    latitude: {
        type: Number,
        require: true // Use require instead of require
    },
    longitude: {
        type: Number,
        require: true // Use require instead of require
    },
    mobileno:{
        type:Number,
        require:true
    },
    itemimg: {
        data: String,
        contenttype: String,
    }
});

const donatesmallmodel = mongoose.model('donatesmall', donatesmallschema);

module.exports = donatesmallmodel;
