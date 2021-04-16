let express = require("express");
let router = express.Router();
let sequelize = require("../db");
let User = sequelize.import("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// User Signup

router.post("/signup", function (req, res) {
  let userModel = {
    email: req.body.user.email,
    password: bcrypt.hashSync(req.body.user.password, 5),
  };
  User.create(userModel)
    .then(function signupSuccess(user) {
      let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 2,
      });
      let responseObject = {
        user: user,
        message: "User successfully created!",
        sessionToken: token,
      };
      res.json(responseObject);
    })
    .catch(function fail(err) {
      res.status(500).json({ error: err });
    });
});

// User Login

router.post("/login", function (req, res) {
  User.findOne({ where: { email: req.body.user.email } })
    .then(function loginSuccess(user) {
      if (user) {
        bcrypt.compare(req.body.user.password, user.password, function (
          err,
          matches
        ) {
          if (matches) {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
              expiresIn: 60 * 60 * 12,
            });
            res.status(200).json({
              user: user,
              message: "User successfully logged in!",
              sessionToken: token,
            });
          } else {
            res.status(502).send({ error: "Login Failed" });
          }
        });
      } else {
        res.status(500).json({ error: "User does not exist." });
      }
    })
    .catch(function (err) {
      res.status(500).json({ error: err });
    });
});
module.exports = router;
