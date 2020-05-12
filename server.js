// Dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");


// Set up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Static Directory
app.use(express.static("public"));


// Parse Request Body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/crud-routes.js")(app);
require("./routes/html.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


app.listen(PORT, function () {
    console.log("Server listening at localhost:" + PORT);
});

