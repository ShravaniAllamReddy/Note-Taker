var express = require("express");
var path = require("path");
const fs = require("fs");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Notes
const notes = JSON.parse(fs.readFileSync("./db/db.json","utf8"));

//The below points our server to a series of "route" files.
require("./routes/apiRoutes")(app,notes);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
})
