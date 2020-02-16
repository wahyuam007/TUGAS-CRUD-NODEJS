// filename : index.js

//import express
let express = require('express');

//import package body-parser
let bodyParser = require('body-parser');

//let import mongoose
let mongoose = require('mongoose');

//initialize app
let app = express();

//import router
let apiRoutes = require("./api-routes");

//configure bodyparser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//connect mongoose and set connection variable
mongoose.connect('mongodb://localhost/tugasCRUD');

var db = mongoose.connection;

//setup server port
var port = process.env.PORT || 8080;

//send message for default URL
app.get('/', (req, res) => res.send('hello world'))

// app APIRoutes
app.use('/api', apiRoutes)

//Launch app to Listen PORT
app.listen(port, function(){
    console.log("Running TugasCRUD on PORT " + port)
})