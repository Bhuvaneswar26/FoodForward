const sellingschema = require('../models/selling')
const multer = require('multer')

let productid = 0;

const seller = (req,res) =>{
    res.render("seller",{cat:req.params.cat});
}


const sellerpost = async (req,res) =>{
    try{
        if (req.file){
            const mail = req.session.mail;
            productid++;
            const data = new sellingschema({
                                itemid:productid,
                                usermail:mail,
                                itemname:req.body.itemname,
                                itemdesc:req.body.itemdesc,
                                price:req.body.productPrice,
                                latitude:req.body.latitude,
                                longitude:req.body.longitude,
                                mobileno:req.body.whatsapp,
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
        res.render("seller",{cat:req.params.cat});        
    }                 
    catch(err){
    console.log(err)
    }
    }
module.exports = {seller,sellerpost};