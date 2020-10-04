//Npm Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

//create an "express " server
const app = express();


//set an initial port
var PORT = process.env.PORT || 8080;

//Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//router 
require(`./routes/apiRoutes`)(app);
require(`./routes/htmlRoutes`)(app);

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });