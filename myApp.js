var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello Express");
});

console.log("Hello World");

module.exports = app;
