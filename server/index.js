const dbConnect = require("./config/db");
const express = require("express");
var cors = require('cors')
const bodyParser = require('body-parser');

const routes = require('./routes/Api.js')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));
const PORT = process.env.PORT || 4000
///connect to db
dbConnect();
//connect to PORT
app.listen(PORT, (req, res)=>{
console.log("server is running at", PORT)
})
app.use('/Api', routes)
