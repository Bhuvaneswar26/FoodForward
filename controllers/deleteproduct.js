
const Product = require('../models/selling');

const product2 = require('../models/smalldonate')

const product3 = require('../models/donatelarge')

const product4 = require('../models/donateessentials')

// Define a route for the "Update Product" page
const  deleteproduct = async (req, res) => {
  const productId = req.params.id;
  // Fetch the product from the database by its ID
  await Product.findByIdAndDelete(productId)

  res.redirect('/sellerdashboard');
};


const  deleteproduct2 = async (req, res) => {
  const productId = req.params.id;
  // Fetch the product from the database by its ID
  await product2.findByIdAndDelete(productId)

  res.redirect('/sellerdashboard');
};

const  deleteproduct3 = async (req, res) => {
  const productId = req.params.id;
  // Fetch the product from the database by its ID
  await product3.findByIdAndDelete(productId)

  res.redirect('/sellerdashboard');
};

const  deleteproduct4 = async (req, res) => {
  const productId = req.params.id;
  // Fetch the product from the database by its ID
  await product4.findByIdAndDelete(productId)

  res.redirect('/sellerdashboard');
};

module.exports = {deleteproduct,deleteproduct2,deleteproduct3,deleteproduct4};
