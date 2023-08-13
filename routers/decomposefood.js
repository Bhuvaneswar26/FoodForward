const express = require('express');
const decomposefood = require('../controllers/decomposefood');

const router = express.Router();

router.use('/',decomposefood);


module.exports = router