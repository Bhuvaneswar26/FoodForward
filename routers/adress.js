const express = require('express');
const adress = require('../controllers/adress');

const router = express.Router();

router.use('/',adress);


module.exports = router