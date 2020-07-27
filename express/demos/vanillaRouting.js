const express = require("express");
const router = express.Router();

app.get("/", function (req, res) {
  res.send("Hello World!");
  // res.download("images/xyz.jpg")
  // res.redirect("http://www.slatergordon.co.uk/")
  // res.end()
});

app.post("/", function (req, res) {
  res.send("Got a POST request");
});

app.put("/user", function (req, res) {
  res.send("Got a PUT request at /user");
});

app.delete("/user", function (req, res) {
  res.send("Got a DELETE request at /user");
});
