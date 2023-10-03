const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h2>Yo what's up?</h2>");
});

module.exports = router;
