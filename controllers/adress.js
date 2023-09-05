const adress = (req,res) =>{
    console.log(req.params.cat)
    res.render("adress");
}

module.exports = adress;