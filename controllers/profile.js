const userschema = require('../models/user')

const profile = async (req, res) => {

    const mail = req.session.usermail;

    const data = await userschema.find({mail:mail});

    console.log(data)

    res.render('profile',{data:data});
}


module.exports = profile;