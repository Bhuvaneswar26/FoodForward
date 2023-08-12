const express = require('express');
const homepage = require('../controllers/homepage')

const router = express.Router();


router.use("/",homepage)


module.exports = router
