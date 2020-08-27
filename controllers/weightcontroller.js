let express = require("express");
let router = express.Router();
const Weight = require("../db").import("../models/weight.js");
let validateSession = require("../middleware/validate-session");

router.post("/entry", validateSession, (req, res) => {
  const weightEntry = {
    date: req.body.weight.date,
    weight: req.body.weight.weight,
    owner: req.user.id,
  };

  // Enter in your weight

  Weight.create(weightEntry)
    .then((weight) => res.status(200).json(weight))
    .catch((err) => res.status(500).json({ error: err }));
});

// Get all Workout Log Entries

router.get("/entry", validateSession, (req, res) => {
  const userid = req.user.id;
  console.log(userid);
  Weight.findAll({
    where: { owner: userid },
  })
    .then((weights) => res.status(200).json(weights))
    .catch((err) => res.status(500).json({ error: err }));
});

// Get weight entries

router.get("/mine", validateSession, (req, res) => {
  let userid = req.user.id;
  Weight.findAll({
    where: { owner: userid },
    order: [["id", "ASC"]],
  })
    .then((weights) => res.status(200).json(weights))
    .catch((err) => res.status(500).json({ error: err }));
});

// Edit your weight

router.put("/entry/:id", validateSession, function (req, res) {
  const updateWeightEntry = {
    date: req.body.weight.date,
    weight: req.body.weight.weight,
  };

  const query = { where: { id: req.params.id, owner: req.user.id } };

  Weight.update(updateWeightEntry, query)
    .then((weights) => res.status(200).json(weights))
    .catch((err) => res.status(500).json({ error: err }));
});

// DELETE Weight Entries

router.delete("/entry/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id, owner: req.user.id } };

  Weight.destroy(query)
    .then(() => res.status(200).json({ message: "Weight Entry Removed" }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
