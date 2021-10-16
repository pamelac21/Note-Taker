const fs = require("fs");
const path = require("path");
//unique id npm package
const {v4 : uuidv4} = require('uuidv4')

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        res.json(notesArray);
    })
    app.post("/api/notes", (req, res) => {

        
        const newNote = {
            id: uuid(),
            title: req.body.title,
            text: req.body.text
        }

        console.log(newNote);
        const file = path.join(__dirname, "../db/db.json");

        notesArray.push(newNote);
        
        fs.writeFile(file, JSON.stringify(notesArray, null, 4), err => {
            if (err) throw err;
            console.log("New note has been saved!");
        });

        res.send(newNote);
    });

    
}