
const Product = require('../models/selling'); // Replace with your product model

// Define a route for the "Update Product" page
const  updateproduct = async (req, res) => {
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
    res.render('updateproduct', { product });
};






const patchupdateproduct = async (req, res) => {
    const productId = req.params.id; // Get the product ID from the URL

    console.log(req.body,"hiii",productId)

    try {
        const updatedData = {}; // Create an empty object to store updated data

        // Check and update all fields
        if (req.body.itemname) {
            updatedData.itemname = req.body.itemname;
        }
        if (req.body.itemdesc) {
            updatedData.itemdesc = req.body.itemdesc;
        }
        if (req.body.price) {
            updatedData.price = req.body.price;
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

        // Find the product by ID and update it with the new data
        const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



module.exports = {updateproduct, patchupdateproduct};
