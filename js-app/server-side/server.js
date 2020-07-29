require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const mongoose = require("mongoose");

// const messageController = require("../server-side/db/controllers/messageController");

app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

const Message = mongoose.model("Message", {
  name: String,
  message: String,
});

app.get("/messages", (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages);
  });
});

app.post("/messages", (req, res) => {
  const message = new Message(req.body);

  message.save((err) => {
    if (err) sendStatus(500);

    io.emit("message", req.body);
    res.sendStatus(200);
  });
});
// app.use("/messages", messageController);
io.on("connection", (socket) => {
  console.log("a user connected");
});

const dBurl = process.env.DB_CONNECTION;
mongoose.connect(
  dBurl,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (!error) {
      console.log("mongo-db connection working");
    } else {
      console.log("check mongo-db connection", error);
    }
  }
);
mongoose.Promise = global.Promise;

const server = http.listen(PORT, () =>
  console.log(`your-app listening on ${PORT}`)
);
