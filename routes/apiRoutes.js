const fs = require("fs");
const path = require("path");
const noteArray = require("../Develop/db/db.json");
//unique id npm package
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(noteArray);
  });

  app.post("/api/notes", (req, res) => {
    const newNote = {
      id: uuid(),
      title: req.body.title,
      text: req.body.text,
    };

    console.log(newNote);
    const file = path.join(__dirname, "../Develop/db/db.json", 'utf8');

    noteArray.push(newNote);

    fs.writeFile(file, JSON.stringify(noteArray, null, 4), (err) => {
      if (err) throw err;
      console.log("New note has been saved!");
    });

    res.send(newNote);
  });

  app.delete("/api/notes/:id", (req, res) => {
    res.send("DELETE Request Called");
    const id = req.params.id;
    const file = path.join(__dirname, "../Develop/db/db.json");

    for (const note of noteArray) {
      if (id === note.id) {
        const index = noteArray.indexOf(note);
        noteArray.splice(index, 1);
        fs.writeFile(file, JSON.stringify(noteArray, null, 4), (err) => {
          if (err) throw err;
          console.log("Note deleted!");
        });
        res.end();
      }
    }
  });
};
