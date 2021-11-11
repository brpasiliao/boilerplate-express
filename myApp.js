require("dotenv").config();

var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase")
    res.json({ message: "HELLO JSON" });
  else res.json({ message: "Hello json" });
});

app.use("/public", express.static(__dirname + "/public"));

console.log("Hello World");

module.exports = app;
