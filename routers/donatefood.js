const express = require('express');
const {donatefood,donatelargepost} = require('../controllers/donatefood');

const router = express.Router();

router.get('/',donatefood);
router.post('/',donatelargepost);


module.exports = router