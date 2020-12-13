const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
app.use(cors());
app.use(bodyParser.json());
app.post("/login", function (req, res) {
  console.log(req.body.email, req.body.password);
  res.send("waaalaykom salem");
});
app.listen(5000);
