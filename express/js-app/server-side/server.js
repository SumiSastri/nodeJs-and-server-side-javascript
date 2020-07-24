const express = require("express");
const app = express();
const port = 5000;

app.use(express.static(__dirname));

// hardcoding data
const messages = [
  { name: "Tim", message: "Hi" },
  { name: "Jane", message: "Hello" },
];

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
