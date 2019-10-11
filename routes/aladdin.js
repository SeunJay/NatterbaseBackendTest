const express = require("express");
const aladdin = require("../controllers/aladdin");

const router = express.Router();

router.post("/aladdin", aladdin);

module.exports = router;