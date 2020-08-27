let express = require("express");
let router = express.Router();
let sequelize = require("../db");
let Favorite = sequelize.import("../models/favorite");
let validateSession = require("../middleware/validate-session");

router.get("/practice", validateSession, function (req, res) {
  res.send("This is a practice route");
});

module.exports = router;
