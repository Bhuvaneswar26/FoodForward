// routes.js
const express = require('express');
const router = express.Router();
const {updateproduct3 ,patchupdateproduct3} = require('../controllers/updateproduct3');


router.get('/largedonation/:id', updateproduct3);
router.patch('/largedonation/:id',patchupdateproduct3);

module.exports = router;


