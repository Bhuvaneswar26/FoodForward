
const Product = require('../models/smalldonate'); // Replace with your product model

// Define a route for the "Update Product" page
const  updateproduct2 = async (req, res) => {
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
    res.render('updateproduct2', { product });
};






const patchupdateproduct2 = async (req, res) => {
    const productId = req.params.id; // Get the product ID from the URL

    console.log(req.body,"hiii2",productId)

    try {
        const updatedData = {}; // Create an empty object to store updated data

        // Check and update all fields
        if (req.body.itemname) {
            updatedData.itemname = req.body.itemname;
        }
        if (req.body.itemdesc) {
            updatedData.itemdesc = req.body.itemdesc;
        }
        if (req.body.address) {
            updatedData.address = req.body.address;
        }
        if (req.body.whatsapp) {
            updatedData.mobileno = req.body.whatsapp;
        }

        // Check if a new image file was uploaded
        if (req.file) {
            // Handle the file upload and update the image path in the database
            updatedData.itemimg = {
                data: req.file.filename,
                contenttype: "image/jpg/png",
                } // Assuming you store the file path in your database
        }

        console.log("before hii")
        // Find the product by ID and update it with the new data
        const updatedProduct2 = await Product.findByIdAndUpdate(productId, updatedData, { new: true });

        console.log(updatedProduct2)
        console.log("hfi")
        if (!updatedProduct2) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.redirect("/homepage")
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



module.exports = {updateproduct2, patchupdateproduct2};
