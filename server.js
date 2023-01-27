// Importing required modules
const express = require("express");
const path = require("path");

// Initializing the express
const app = express();

// PORT for running the server
const PORT = 3001;

// middleware
app.use(express.static("public"));

// routes for static HTML files created
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// fall back and default route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// listening the server in the port 3001
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
