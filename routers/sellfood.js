const express = require('express');
const sellfood = require('../controllers/sellfood');

const router = express.Router();

router.use('/',sellfood);


module.exports = router