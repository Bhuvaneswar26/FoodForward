const { name } = require('ejs');
const mongoose = require('mongoose');

const test = mongoose.Schema(
    {
    test1:{
        type:String
    },
    test2:{
        type:Number
    }
}
)

const testmodel = mongoose.model("test",test);


module.exports = testmodel;


