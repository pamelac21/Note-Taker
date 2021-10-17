const fs = require("fs");
const path = require("path");
const notesArray = require("../Develop/db/db.json");
//unique id npm package
const { v4: uuidv4 } = require('uuid');


module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(notesArray);
  });

  app.post("/api/notes", (req, res) => {
    const newNote = {
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text,
    };

    console.log(newNote);
    const file = path.join(__dirname, "../Develop/db/db.json", 'utf8');

    notesArray.push(newNote);

    fs.writeFile(file, JSON.stringify(notesArray, null, 4), (err) => {
      if (err) throw err;
      console.log("New note has been saved!");
    });

    res.send(newNote);
  });

  app.delete("/api/notes/:id", (req, res) => {
    res.send("DELETE Request Called");
    const id = req.params.id;
    const file = path.join(__dirname, "../Develop/db/db.json");

    for (const note of notesArray) {
      if (id === note.id) {
        const index = notesArray.indexOf(note);
        notesArray.splice(index, 1);
        fs.writeFile(file, JSON.stringify(notesArray, null, 4), (err) => {
          if (err) throw err;
          console.log("Note deleted!");
        });
        res.end();
      }
    }
  });
};
