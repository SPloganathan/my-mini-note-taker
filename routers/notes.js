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

// post method for creating new notes
router.post("/", (req, res) => {
  if (req.body) {
    const { title, text } = req.body;
    const newNote = {
      title,
      text,
      id: uuid(),
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

// delete method for deleting the existing notes
router.delete("/:id", (req, res) => {
  if (req.params.id) {
    const { id } = req.params;
    // Splice - When using splice we should specify which index of the element to be deleted and also how many elements. Difference between Splice and Slice is the Splice will update the existing array whereas Slice will create a new array of elements and update that,leaving the original one.
    const index = notes.findIndex((note) => note.id === id);
    notes.splice(index, 1);
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(notes, null, 4),
      (err) =>
        err ? console.error(err) : console.log("File written successfully")
    );
    res.json("Successfully Deleted");
  } else {
    res.json("Error");
  }
});

// exporting
module.exports = router;
