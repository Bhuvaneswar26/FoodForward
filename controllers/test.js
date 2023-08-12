const testmodel = require('../models/test')
const axios = require('axios');
const NodeGeocoder = require('node-geocoder');

const test = async (req, res) => {

  console.log("hiib");

  const sav = testmodel({
    test1: "h2o",
    test2: 10
  });

  console.log("hii1");

  try {
    await sav.save();
    console.log("hii");
  } catch (err) {
    console.log(err);
  }

  const options = {
    provider: 'openstreetmap'
  };

  const geocoder = NodeGeocoder(options);

  const latitude = 16.938393;
  const longitude = 80.412291;

  try {
    const geocodeResult = await geocoder.reverse({ lat: latitude, lon: longitude });
    console.log('Geocoding API response:', geocodeResult);  // Add this line for debugging
    
    if (geocodeResult && geocodeResult.length > 0) {
      const address = geocodeResult[0].extra;
      console.log('Address object:', address);  // Add this line for debugging
      
      const village = address.village;
      const town = address.town;
  
      if (village) {
        console.log('Village:', village);
      } else if (town) {
        console.log('Town:', town);
      } else {
        console.log('Village or town not found');
      }
    } else {
      console.log('No address information available.');
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
  

  res.render('test');
}

module.exports = test;
