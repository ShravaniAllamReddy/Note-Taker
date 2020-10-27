const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

//Serving static files in Express
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.json());


//Notes
const note = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

//The below points our server to a series of "route" files.
require("./routes/apiRoutes")(app, note);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
})
