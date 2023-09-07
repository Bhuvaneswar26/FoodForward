// routes.js
const express = require('express');
const router = express.Router();
const {updateproduct4 ,patchupdateproduct4} = require('../controllers/updateproduct4');
const multer = require('multer');
// Replace with the actual path to your buyer controller

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Set the destination folder for file uploads
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename
    },
});

const upload = multer({ storage: storage });


router.get('/essentialdonation/:id', updateproduct4);
router.patch('/essentialdonation/:id', upload.single('itemimg'),patchupdateproduct4);

module.exports = router;


