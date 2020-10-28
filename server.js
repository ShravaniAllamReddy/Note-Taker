// Dependencies
const express = require("express");
const path = require("path");

// Sets up the Express App
const app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serving static files in Express
app.use('/', express.static(path.join(__dirname, 'public')))

//The below points our server to a series of "route" files.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
})
