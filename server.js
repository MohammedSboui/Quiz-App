const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const adminRouter = require("./routes/admin");
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.o7lby.mongodb.net/quizDB?retryWrites=true&w=majority",
  () => {
    console.log("Connected to database successfully");
  }
);
app.use(cors());
app.use(bodyParser.json());
app.use("/admin", adminRouter); // kol haja /admin nzid nthabet fi kmaletha fi adminRouter( ELI FIH AY ENDPOINT TEB3A ADMIN)

app.listen(5000);
