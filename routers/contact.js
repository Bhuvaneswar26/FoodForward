const express = require('express');
const contact= require('../controllers/contact');

const router = express.Router();

router.use('/',contact);


module.exports = router