const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(cors());
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const apiMessages = [
  { name: "Zee", message: "Hi gang" },
  { name: "Paraic", message: "Hey whatsup" },
];

app.get("/messages", (req, res) => {
  res.send(apiMessages);
});

app.post("/messages", (req, res) => {
  apiMessages.push(req.body);
  io.emit("message", req.body);
  res.sendStatus(200);
});

io.on("connection", (socket) => {
  console.log("user connected");
});

const server = http.listen(5000, () => {
  console.log("your-app listening on port", server.address().port);
});
