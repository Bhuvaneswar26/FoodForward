const express = require('express');
const multer = require("multer");
const {donateessentials,donateessentialspost} = require('../controllers/donateessentials');



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

router.get('/',donateessentials);
router.post('/',uploads.single('file'),donateessentialspost)


module.exports = router