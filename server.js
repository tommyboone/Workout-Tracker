const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


//MONGODB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
});

//Routes
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);


//Starts server listening on PORT
app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}!`);
});