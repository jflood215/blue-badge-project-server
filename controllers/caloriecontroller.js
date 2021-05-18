let express = require("express");
let router = express.Router();
let sequelize = require("../db");
let Calorie = sequelize.import("../models/calorie");
let validateSession = require("../middleware/validate-session");

module.exports = router;