

module.exports = function (app, note) {
    const generateUniqueId = require('generate-unique-id');
    const fs = require('fs');
    app.get("/api/notes", function (req, res) {
        return res.json(note);
    });

    app.post("/api/notes", function (req, res) {

        req.body.id = generateUniqueId();
        let newNotes = req.body;

        // newNotes.title = newNotes.title.replace(/\s+/g, "").toLowerCase();
        console.log(newNotes);

        note.push(newNotes);

        fs.writeFileSync("./db/db.json", JSON.stringify(note), "utf8");

        res.json(newNotes);

    });

    app.delete("/api/notes/:id", function (req, res) {

        console.log(req.params.id);

        note.map(el => {
            if (el.id === req.params.id) {

                note.splice(el.id, 1);
                console.log(note);

            }
        })

        fs.writeFileSync("./db/db.json", JSON.stringify(note), "utf8");
    })
}

