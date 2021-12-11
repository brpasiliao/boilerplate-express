var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var express = require("express");
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
})

app.route("/name")
  .get((req, res) => {
    var response = req.query.first + " " + req.query.last;
    res.send({ name: response });
  })
  .post((req, res) => {
    var response = req.body.first + " " + req.body.last;
    res.send({ name: response });
  })

// GET /:word/echo
app.get("/:word/echo", (req, res) => {
  res.send({ echo: req.params.word });
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({ time: req.time });
  }
);

app.get("/json", (req, res) => {
  var response = "Hello json";
  const mySecret = process.env['MESSAGE_STYLE'];
  
  if (mySecret === "uppercase") 
    res.json({ message: response.toUpperCase() });
  else res.json({ message: response });
});

app.get("/", function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

console.log("Hello World");

module.exports = app;
