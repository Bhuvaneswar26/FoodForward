const donatelargeschema = require('../models/donatelarge')

const donatefood = (req,res) =>{
    res.render("donatefood");
}

const donatelargepost = async (req,res) =>{
    console.log("hii i reached",req.body)
    try{
            const mail = req.session.usermail;
            const data = new donatelargeschema({
                                usermail:req.body.email,
                                name:req.body.name,
                                desc:req.body.desc,
                                mobileno:req.body.contact,
                                address:req.body.eventAddress,
                                date:req.body.date,
                                time:req.body.time,
                            })
            await data.save()
            .then(()=>{
                console.log("nop")
            })
            .catch((err)=>{
                console.log("problem",err)
            })  
        console.log(req.body)
        res.render("donatefood");        
    }                 
    catch(err){
    console.log(err)
    }
    }

module.exports = {donatefood,donatelargepost}