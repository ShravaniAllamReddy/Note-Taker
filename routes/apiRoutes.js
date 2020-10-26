

module.exports= function(app, notes){
    app.get("/api/notes", function(req, res) {
    return res.json(notes);
  });


}