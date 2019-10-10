const express = require("express");
const data = require("../controllers/data");

const router = express.Router();

router.post("/check-data", data);

module.exports = router;
