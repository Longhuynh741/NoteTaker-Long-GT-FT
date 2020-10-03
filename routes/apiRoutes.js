// LOAD DATA

const fs = require("fs");
const db = require("../db/db.json")
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
        fs.readFile("../db/db.json", "utf-8", (err) => {
            if (err) {
                throw err;
            };
            const notesArray = [];
            let userNote = req.body;
            const noteData = JSON.parse(data);
            noteData.push(userNote);
            for (let i = 0; i < noteData.length; i++) {
                const newNote = {
                    title: noteData[i].title,
                    text: noteData[i].text,
                    id: i
                };
                notesArray.push(newNote);
            }
            fs.writeFile("../db/db.json", JSON.stringify(noteData), (err, data) => {
                if (err) {
                    throw err;
                }
                res.json(JSON.parse(data));
            });
        });
    });
    app.delete("/api/notes/:id", (req, res) => {
        const id = parseInt(req.params.id);
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
            if (err) throw err;
            const db = JSON.parse(data);
            const notesArray = [];
    
            for (let i = 0; i < noteData.length; i++) {
                if (i !== id) {
                    const newNote = {
                        title: db[i].title,
                        text: db[i].text,
                        id: newDB.length
                    };
    
                    newDB.push(newNote);
                }
            }
    
            fs.writeFile(path.join(__dirname, "../db/db.json"), (err) => {
                if (err) throw err;
                res.json(req.body);
            });
        });
    });
    app.delete("/api/notes/:id", (req, res) => {
        fs.readFile("./db/db.json", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return res.json({
                    error: true,
                    data: null,
                    message: "Unable to get note.",
                });
            }
            const datainfo = JSON.parse(data)
            updatedData = datainfo.filter(function (data) {
                return data.id != req.params.id;
            });
            console.log(updatedData);
            fs.writeFile("./db/db.json", JSON.stringify(updatedData), (err) => {
                if (err) {
                    console.log(err);
                    return res.json({
                        error: true,
                        data: null,
                        message: "Unable to save note.",
                    });
                }
                res.json({
                    error: false,
                    data: updatedData,
                    message: "Successfully added new note",
                })
            })
        })
    })
}