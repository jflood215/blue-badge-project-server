let express = require("express");
let router = express.Router();
let sequelize = require("../db");
let Calorie = sequelize.import("../models/calorie");
let validateSession = require("../middleware/validate-session");

module.exports = router;

/*
const router = require("express").Router();
const Log = require("../db").import("../models/log.js");
let validateSession = require("../middleware/validate-session");

router.post("/log", validateSession, (req, res) => {
  const logEntry = {
    description: req.body.log.description,
    definition: req.body.log.definition,
    result: req.body.log.result,
    owner: req.user.id,
  };

  // Creating a Workout Log Entry

  Log.create(logEntry)
    .then((log) => res.status(200).json(log))
    .catch((err) => res.status(500).json({ error: err }));
});

// Get all Workout Log Entries

router.get("/log", validateSession, (req, res) => {
  const userid = req.user.id;
  console.log(userid);
  Log.findAll({
    where: { owner: userid }
  })
    .then((logs) => res.status(200).json(logs))
    .catch((err) => res.status(500).json({ error: err }));
});

// Get individual logs by user id

router.get("/mine", validateSession, (req, res) => {
  let userid = req.user.id;
  Log.findAll({
    where: { owner: userid },
    order: [["id", "ASC"]]
  })
    .then((logs) => res.status(200).json(logs))
    .catch((err) => res.status(500).json({ error: err }));
});

// /api/log/:id	PUT	Allows individual logs to be updated by a user. *Only one not working*

router.put("/log/:id", validateSession, function (req, res) {
  const updateLogEntry = {
    description: req.body.log.description,
    definition: req.body.log.definition,
    result: req.body.log.result,
  };

  const query = { where: { id: req.params.id, owner: req.user.id } };

  Log.update(updateLogEntry, query)
    .then((logs) => res.status(200).json(logs))
    .catch((err) => res.status(500).json({ error: err }));
});

// DELETE Workout Log Entries

router.delete("/log/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id, owner: req.user.id } };

  Log.destroy(query)
    .then(() => res.status(200).json({ message: "Workout Log Entry Removed" }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;

// /api/log/:id	DELETE	Allows individual logs to be deleted by a user.

*/
