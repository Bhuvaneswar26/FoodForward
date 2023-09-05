const express = require('express');
const sellerdashboard = require('../controllers/sellerdashboard');

const router = express.Router();

router.use('/',sellerdashboard);


module.exports = router