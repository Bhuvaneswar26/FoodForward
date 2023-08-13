const express = require('express');
const buyfood = require('../controllers/buyfood');

const router = express.Router();

router.use('/',buyfood);


module.exports = router