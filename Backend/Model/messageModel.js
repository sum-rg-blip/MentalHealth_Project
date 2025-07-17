const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: String,
  text: String,
  timestamp: String
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);
