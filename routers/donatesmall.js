const express = require('express');
const multer = require("multer");
const {donatesmall,donatesmallpost} = require('../controllers/donatesmall');



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

router.get('/',donatesmall);
router.post('/',uploads.single('file'),donatesmallpost)


module.exports = router