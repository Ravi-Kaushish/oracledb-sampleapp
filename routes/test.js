const express = require("express");
const router = express.Router();
const { TestFuxn } = require("../controllers/test");

router.get("/", TestFuxn);
router.post("/", TestFuxn);
module.exports = router;