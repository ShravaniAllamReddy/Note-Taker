

module.exports = function (app, note) {
    const fs = require('fs');
    app.get("/api/notes", function (req, res) {
        return res.json(note);
    });

    app.post("/api/notes", function (req, res) {

        let newNotes = req.body;
        
        // newNotes.title = newNotes.title.replace(/\s+/g, "").toLowerCase();
        console.log(newNotes);

        note.push(newNotes);

        fs.writeFileSync("./db/db.json", JSON.stringify(note), "utf8");

        res.json(newNotes);


    });

}