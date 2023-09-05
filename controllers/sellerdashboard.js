// Import necessary modules and models
const Product = require('../models/selling'); // Import your Product model

// Define the sellerdashboard controller
const sellerdashboard = async (req, res) => {
    try {
        // Get the user's email from the session
        const userEmail = req.session.mail;

        // Query the database for products associated with the user's email
        const userProducts = await Product.find({ sellerEmail: userEmail });

        // Render the sellerdashboard.ejs template with the userProducts data
        res.render('sellerdashboard', { products: userProducts });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// Export the sellerdashboard controller
module.exports = sellerdashboard;
