const fs = require("fs");
const path = require("path");
//const notesArray = require("../Develop/db/db.json");
//unique id npm package
const { v4: uuidv4 } = require('uuid');


module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("../Develop/db/db.json", "utf8"));
    res.json(data);
  });

  app.post("/api/notes", (req, res) => {
    const newNote = {
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text,
    };
    let data = JSON.parse(fs.readFileSync("../Develop/db/db.json", "utf8"));
    data.push(newNote);
    fs.writeFileSync('../Develop/db/db.json', JSON.stringify(data));
    res.json(data);
  })


app.delete("/api/notes/:id", (req, res) => {

  let noteId = req.params.id.toString();
  let data = JSON.parse(fs.readFileSync("../Develop/db/db.json", "utf8"));
  const newData = data.filter( note => note.id.toString() !== noteId );
  fs.writeFileSync('../Develop/db/db.json', JSON.stringify(newData));
  res.json(newData);
});



}

