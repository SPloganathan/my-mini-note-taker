// importing
const express = require("express");
// modular-routing
const router = express.Router();
// importing the data
const notes = require("../db/db.json");

// get method for fetching the notes
router.get("/", (req, res) => {
  res.send(notes);
});

// exporting
module.exports = router;
