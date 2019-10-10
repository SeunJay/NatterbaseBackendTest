const express = require("express");
const input = require("../controllers/input");

const router = express.Router();

router.delete("/remove-item/:item", input);

module.exports = router;