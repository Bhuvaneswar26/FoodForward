// buyerController.js
const SellingModel = require('../models/selling'); // Replace with the actual path to your model

const buyer = async (req, res) => {
    try {
        const { category, latitude, longitude } = req.params; // Access URL parameters

        console.log(category,latitude,longitude)

        // Define the maximum distance (5 km in meters)
        const maxDistance = 5000;

        // Find products within the specified category and within the 5km range
        const products = await SellingModel.find({
            itemcat: category, // Assuming 'itemdesc' contains the category
            latitude: {
                $gte: parseFloat(latitude) - (maxDistance / 111.32), // Latitude calculation for distance
                $lte: parseFloat(latitude) + (maxDistance / 111.32),
            },
            longitude: {
                $gte: parseFloat(longitude) - (maxDistance / (111.32 * Math.cos((parseFloat(latitude) * Math.PI) / 180))), // Longitude calculation for distance
                $lte: parseFloat(longitude) + (maxDistance / (111.32 * Math.cos((parseFloat(latitude) * Math.PI) / 180))),
            },
        });

        const productsWithUpdatedImage = products.map((product) => {
            const temp = "/uploads/" + product.itemimg.data;
            return { ...product, itemimg: temp };
        });
        
        console.log(productsWithUpdatedImage);
        res.render('buyer', { product: productsWithUpdatedImage });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = buyer;
