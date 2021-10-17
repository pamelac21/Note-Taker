const path = require("path");

module.exports = (app) => {
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
  });

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
  });
};
