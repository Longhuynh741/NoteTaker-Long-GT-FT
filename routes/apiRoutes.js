// LOAD DATA

const fs = require("fs");
const path = require("path");

//Routing

module.exports = function (app) {
  //API GET

  app.get("/api/notes", function (req, res) {
    fs.readFile("../db/db.json", "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.json(JSON.parse(data));
    });
  });

  //API POST

  app.post("/api/notes", function (req, res) {
    let userNote = req.body;
    const noteData = JSON.parse(data);
    noteData.push(userNote);
    fs.writeFile("../db/db.json", JSON.stringify(noteData), (err, data) => {
      if (err) {
        throw err;
      }
      res.json(JSON.parse(data));
    });

    //   app.delete("/api/notes/:id", function (req, res) {

    //   });
  });
};
