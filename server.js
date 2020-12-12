const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
app.use(cors())
app.use(bodyParser.json())
app.get("/salem",function(req,res){
res.send("waaalaykom salem");
});
app.listen(5000);