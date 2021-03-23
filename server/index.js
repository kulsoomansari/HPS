const express = require("express");
var cors = require('cors')
const bodyParser = require('body-parser');
const dbConnect = require("./config/db");

const RegisterRoute = require('./routes/api/Register.js')
const ServicesRoute = require('./routes/api/Services.js')
const WelfareRoute = require('./routes/api/Welfare.js')


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
app.use('/api/Register', RegisterRoute)
// app.use('/api/Services', ServicesRoute)
app.use('/api/Welfare', WelfareRoute)

