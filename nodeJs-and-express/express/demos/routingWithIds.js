const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
  // res.download("images/xyz.jpg")
  // res.redirect("http://www.slatergordon.co.uk/")
  // res.end()
});

app.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  let userData = Number(req.params.id);
  console.log(userData);
  console.log(user[userData]);
  res.send(user[userData]);
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

app.listen(port, () =>
  console.log(`Vanilla server listening at http://localhost:${port}`)
);
