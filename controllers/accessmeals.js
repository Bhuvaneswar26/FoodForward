const donatesmallschema = require('../models/smalldonate');
const donatelargeschema = require('../models/donatelarge')
const donateessentialsschema = require('../models/donateessentials');

const accessmeals = async (req, res) => {
    // Get latitude and longitude from URL query parameters
    try {
        const  lat  = req.params.lat; 

        const log = req.params.log;
        
        // Access URL parameters

        console.log(req.params)

        console.log(lat,log)

        // Define the maximum distance (5 km in meters)
        const maxDistance = 5000;

        // Find products within the specified category and within the 5km range
        const smallitems = await donatesmallschema.find({
            latitude: {
                $gte: parseFloat(lat) - (maxDistance / 111.32), // Latitude calculation for distance
                $lte: parseFloat(lat) + (maxDistance / 111.32),
            },
            longitude: {
                $gte: parseFloat(log) - (maxDistance / (111.32 * Math.cos((parseFloat(lat) * Math.PI) / 180))), // Longitude calculation for distance
                $lte: parseFloat(log) + (maxDistance / (111.32 * Math.cos((parseFloat(lat) * Math.PI) / 180))),
            },
        });

        const smallitemsUpdatedImage = smallitems.map((product) => {
            const temp = "/uploads/" + product.itemimg.data;
            return { ...product, itemimg: temp };
        });

        const essentialitems = await donateessentialsschema.find({
            latitude: {
                $gte: parseFloat(lat) - (maxDistance / 111.32), // Latitude calculation for distance
                $lte: parseFloat(lat) + (maxDistance / 111.32),
            },
            longitude: {
                $gte: parseFloat(log) - (maxDistance / (111.32 * Math.cos((parseFloat(lat) * Math.PI) / 180))), // Longitude calculation for distance
                $lte: parseFloat(log) + (maxDistance / (111.32 * Math.cos((parseFloat(lat) * Math.PI) / 180))),
            },
        });

        const essentialitemsUpdatedImage = essentialitems.map((product) => {
            const temp = "/uploads/" + product.itemimg.data;
            return { ...product, itemimg: temp };
        });

        const largeitems = await donatelargeschema.find();
        console.log("hiii end",smallitemsUpdatedImage,largeitems,essentialitemsUpdatedImage)
        res.render("accessmeals",{x:smallitemsUpdatedImage,y:largeitems,z:essentialitemsUpdatedImage})
    } catch (error) {
        console.error("err");
        res.status(500).send('Internal Server Error');
    }
};

module.exports = accessmeals;
