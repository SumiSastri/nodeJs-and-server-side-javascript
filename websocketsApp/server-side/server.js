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

app.get("/", (req, res) => {
  res.sendFile(
    "/Users/ssbt/Documents/GitHub/node.js-and-server-side-javascript/websocketsApp/public/index.html"
  );
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("message", (usrMsg) => {
    console.log(`user message: ${usrMsg}`);
    io.emit("message", usrMsg);
  });

  socket.on("disconnect", () => {
    // using the disconnect event
    console.log("socket-off: user disconnected");
    io.emit("message", "io-server: user disconnected");
  });
});
server.listen(PORT, () => console.log(`your-app listening on ${PORT}`));
