const express = require("express");
const router = express.Router();

// import the schema
const Message = require("../models/messageModel.js");

// GET @/messages route
router.get("/messages", (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages);
  });
});

// POST to @/messages route
router.post("/messages", (req, res) => {
  const message = new Message(req.body);

  message.save((err) => {
    if (err) sendStatus(500);

    io.emit("message", req.body);
    res.sendStatus(200);
  });
});

module.exports = router;
