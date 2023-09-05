// routes.js
const express = require('express');
const router = express.Router();
const {updateproduct ,patchupdateproduct} = require('../controllers/updateproduct');
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


router.get('/:id', updateproduct);
router.patch('/:id', upload.single('itemimg'),patchupdateproduct);

module.exports = router;


