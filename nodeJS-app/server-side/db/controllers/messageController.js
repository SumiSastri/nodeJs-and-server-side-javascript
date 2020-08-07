const express = require("express");
const router = express.Router();

const MessageModel = require("../models/messageModel.js");

// GET @/messages route
router.get("/messages", (req, res) => {
  MessageModel.find({}, (err, apiMessages) => {
    res.send(apiMessages);
  });
});

// POST to @/messages route
router.post("/messages", (req, res) => {
  const messageInputs = new MessageModel(req.body);

  messageInputs.save((err) => {
    if (err) sendStatus(500);

    io.emit("message", req.body);
    res.sendStatus(200);
  });
});

// app.post("/messages", (req, res) => {
//   apiMessages.push(req.body);
//   io.emit("message", req.body);
//   res.sendStatus(200);
// });

module.exports = router;
