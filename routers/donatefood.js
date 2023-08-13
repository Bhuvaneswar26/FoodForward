const express = require('express');
const donatefood = require('../controllers/donatefood');

const router = express.Router();

router.use('/',donatefood);


module.exports = router