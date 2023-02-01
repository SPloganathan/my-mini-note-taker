// importing required modules
const express = require("express");
// 'modular-routing' using express.Router
const router = express.Router();
// endpoint for notes
router.use("/notes", require("./notes"));
// exporting
module.exports = router;
