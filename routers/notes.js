// importing
const express = require("express");
// modular-routing
const router = express.Router();
// importing the data
const notes = require("../db/db.json");
// importing fs
const fs = require("fs");
// importing path for accessing folders
const path = require("path");
// importing a util func
const uuid = require("../utils/uuid");

// get method for fetching the notes
router.get("/", (req, res) => {
  res.send(notes);
});

//post method for creating new notes
router.post("/", (req, res) => {
  if (req.body) {
    const { title, text } = req.body;
    const newNote = {
      title,
      text,
      uuid: uuid(),
    };
    notes.push(newNote);
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(notes, null, 4),
      (err) =>
        err ? console.error(err) : console.log("File written successfully")
    );
    res.send(newNote);
  } else {
    res.json("Error in posting");
  }
});

// exporting
module.exports = router;
