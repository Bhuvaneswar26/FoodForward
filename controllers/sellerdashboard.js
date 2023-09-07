// Import necessary modules and models
const Product = require('../models/selling'); // Import your Product model

const product2 = require('../models/smalldonate');

const product3 = require('../models/donatelarge');

const  product4 = require('../models/donateessentials')

// Define the sellerdashboard controller
const sellerdashboard = async (req, res) => {
    try {
        // Get the user's email from the session
        const userEmail = req.session.usermail;

        console.log(userEmail)

        // Query the database for products associated with the user's email
        const userProducts = await Product.find({ usermail: userEmail });

        const userProducts2 = await product2.find({ usermail: userEmail });
        const userProducts3 = await product3.find({ usermail: userEmail });
        const userProducts4 = await product4.find({ usermail: userEmail });

        console.log(userProducts2,userProducts3,userProducts4)

        // Render the sellerdashboard.ejs template with the userProducts data
        res.render('sellerdashboard', { products: userProducts ,product2:userProducts2,product3:userProducts3,product4:userProducts4});
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// Export the sellerdashboard controller
module.exports = sellerdashboard;
