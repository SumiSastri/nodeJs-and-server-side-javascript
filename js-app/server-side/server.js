const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// hardcoding data
const messages = [
  { name: "Tim", message: "Hi" },
  { name: "Jane", message: "Hello" },
];

app.get("/", (req, res) => {
  res.send("home route working");
});

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.post("/messages", (req, res) => {
  messages.push(req.body);
  res.sendStatus(200);
});

app.listen(port, () =>
  console.log(`js-app server listening at http://localhost:${port}`)
);
