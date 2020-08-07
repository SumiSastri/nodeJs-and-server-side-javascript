require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");

const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

const messageData = [
  { name: "Zee", message: "Hi gang" },
  { name: "Paraic", message: "Hey whatsup" },
];

app.get("/messages", (req, res) => {
  res.send(messageData);
});

app.post("/messages", (req, res) => {
  messageData.push(req.body);
  res.sendStatus(200);
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.emit("message", {
    socketTestMessage: "testing socket - hello 1,2,3 testing, testing...",
  });
  socket.on("another event", (data) => {
    console.log(data);
  });
});

const server = http.listen(5000, () => {
  console.log("your-app listening on port", server.address().PORT);
});
