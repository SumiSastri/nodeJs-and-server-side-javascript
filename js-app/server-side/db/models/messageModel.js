const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Message = new Schema({
  userName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Message", Message);
// OR module.exports = Message = mongoose.model('Message', Message);
