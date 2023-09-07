const donateessentialsschema = require('../models/donateessentials')
const multer = require('multer')


const donateessentials = (req,res) =>{
    res.render("desentials");
}


const donateessentialspost = async (req,res) =>{
    console.log("hii i reached")
    try{
        if (req.file){
            const mail = req.session.usermail;
            const data = new donateessentialsschema({
                                usermail:mail,
                                itemname:req.body.itemname,
                                itemdesc:req.body.itemdesc,
                                latitude:req.body.latitude,
                                longitude:req.body.longitude,
                                mobileno:req.body.contact,
                                address:req.body.address,
                                adress:"const",
                                itemimg: {
                                    data: req.file.filename,
                                    contenttype: "image/jpg/png",
                                    },
                                itemcat:req.params.cat
                                })
            await data.save()
            .then(()=>{
                console.log("nop")
            })
            .catch((err)=>{
                console.log("problem",err)
            })
        }         
        console.log(req.body)
        res.render("desentials");        
    }                 
    catch(err){
    console.log(err)
    }
    }
module.exports = {donateessentials,donateessentialspost};