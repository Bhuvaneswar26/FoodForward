const express = require('express');
const multer = require("multer");
const {seller , sellerpost} = require('../controllers/seller');



const router = express.Router();


const storage = multer.diskStorage({
    destination: 'uploads',
    filename : (req,file , cb) => {
        cb(null,file.originalname)
}
})

const uploads = multer({
    storage:storage
})

router.get('/:cat',seller);
router.post('/:cat',uploads.single('file'),sellerpost)


module.exports = router