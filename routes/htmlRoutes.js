
//path package is included to get the correct file path for our html
const path = require("path");

// Routing

module.exports = function (app) {

    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });


    app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

}