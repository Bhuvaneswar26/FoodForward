const express = require("express");
const {
  decomposefood,
  decomposelargefood,
} = require("../controllers/decomposefood");

const router = express.Router();

router.get("/", decomposefood);
router.post("/", decomposelargefood);

module.exports = router;
