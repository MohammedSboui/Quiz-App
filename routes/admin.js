const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Admin = require("../models/admin");

process.env.SECRET_KEY = "secret";

router.post("/register", (req, res) => {
  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  console.log(userData);

  Admin.findOne({
    username: req.body.username,
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          Admin.create(userData)
            .then((user) => {
              res.json({ status: user.username + " Registered!" });
            })
            .catch((err) => {
              res.send("error: " + err);
            });
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send("error: " + err);
    });
});

router.post("/login", (req, res) => {
  Admin.findOne({
    username: req.body.username,
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            username: user.username,
            email: user.email,
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440,
          });
          res.send(token);
        } else {
          // Passwords don't match
          res.json({ error: "User does not exist" });
        }
      } else {
        res.json({ error: "User does not exist" });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

module.exports = router;
