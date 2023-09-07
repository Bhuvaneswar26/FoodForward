const donatesmallschema = require('../models/smalldonate')
const multer = require('multer')


const donatesmall = (req,res) =>{
    res.render("donatesmall");
}


const donatesmallpost = async (req,res) =>{
    console.log("hii i reached")
    try{
        if (req.file){
            const mail = req.session.usermail;
            const data = new donatesmallschema({
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
        res.render("donatesmall");        
    }                 
    catch(err){
    console.log(err)
    }
    }
module.exports = {donatesmall,donatesmallpost};