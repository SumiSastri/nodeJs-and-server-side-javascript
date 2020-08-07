const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// sets up the constructor for the messageApiData and takes it out of router impots it into Express router and reimports into server

const MessageModel = new Schema({
  userName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Message", MessageModel);
// OR module.exports = Message = mongoose.model('Message', MessageModel);
