// routes.js
const express = require('express');
const router = express.Router();
const buyer = require('../controllers/buyer'); // Replace with the actual path to your buyer controller

router.get('/:category/:latitude/:longitude', buyer);

module.exports = router;
