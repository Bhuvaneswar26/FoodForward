const express = require('express');
const accessmeals = require('../controllers/accessmeals');

const router = express.Router();

router.get('/:lat/:log',accessmeals);


module.exports = router