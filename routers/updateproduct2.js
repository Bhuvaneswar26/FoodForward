// routes.js
const express = require('express');
const router = express.Router();
const {updateproduct2 ,patchupdateproduct2} = require('../controllers/updateproduct2');
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


router.get('/smalldonation/:id', updateproduct2);
router.patch('/smalldonation/:id', upload.single('itemimg'),patchupdateproduct2);

module.exports = router;


