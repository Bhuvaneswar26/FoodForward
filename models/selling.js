const mongoose = require('mongoose');

const sellingschema = mongoose.Schema({
    itemid: {
        type: Number,
        require: true // Use require instead of require
    },
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
        default: Date.now
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
    price: {
        type: Number,
        require: true // Use require instead of require
    },
    itemcat: {
        type: String,
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

const sellingmodel = mongoose.model('selling', sellingschema);

module.exports = sellingmodel;
