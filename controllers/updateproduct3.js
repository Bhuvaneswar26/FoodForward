
const Product = require('../models/donatelarge'); // Replace with your product model

// Define a route for the "Update Product" page
const  updateproduct3 = async (req, res) => {
  const productId = req.params.id;

  console.log(productId)
  // Fetch the product from the database by its ID
  const product =  await Product.findById(productId)
//   (err, product) => {
//     if (err) {
//       console.error(err);
//       // Handle the error (e.g., render an error page)
//       res.render('error', { message: 'Error fetching product' });
//     } else {
//       // Render the "updateproduct.ejs" template with the product data
//       res.render('updateproduct', { product });
//     }
//   });
    console.log(product)
    res.render('updateproduct3', { product });
};






const patchupdateproduct3  = async (req, res) => {
    const productId = req.params.id; // Get the product ID from the URL

    console.log(req.body,"hiii3",productId)

    try {
        const updatedData = {}; // Create an empty object to store updated data

        // Check and update all fields
        if (req.body.itemname) {
            updatedData.name = req.body.itemname;
        }
        if (req.body.itemdesc) {
            updatedData.desc = req.body.itemdesc;
        }
        if (req.body.address) {
            updatedData.address = req.body.address;
        }
        if (req.body.whatsapp) {
            updatedData.mobileno = req.body.whatsapp;
        }
        if (req.body.date) {
            updatedData.date = req.body.date;
        }
        if (req.body.time) {
            updatedData.time = req.body.time;
        }

        console.log("before hii")
        // Find the product by ID and update it with the new data
        const updatedProduct3 = await Product.findByIdAndUpdate(productId, updatedData, { new: true });

        console.log(updatedProduct3)
        console.log("hfi")
        if (!updatedProduct3) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.redirect("/homepage")
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



module.exports = {updateproduct3, patchupdateproduct3};
