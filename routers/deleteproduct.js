const express = require('express');
const {deleteproduct,deleteproduct2,deleteproduct3,deleteproduct4 }= require('../controllers/deleteproduct');


const router = express.Router();

router.use('/selling/:id',deleteproduct);

router.use('/smalldonation/:id',deleteproduct2);

router.use('/largedonation/:id',deleteproduct3);

router.use('/essentialdonation/:id',deleteproduct4);


module.exports = router