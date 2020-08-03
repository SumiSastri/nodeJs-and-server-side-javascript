const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(cors());
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.get("/", (req, res) => {
//   res.send("your app is working");
// });
app.get("/", (req, res) => {
  res.sendFile(
    "/Users/ssbt/Documents/GitHub/node.js-and-server-side-javascript/websocketsApp/public/index.html"
  );
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

server.listen(PORT, () => console.log(`your-app listening on ${PORT}`));
