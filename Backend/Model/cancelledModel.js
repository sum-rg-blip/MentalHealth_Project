const mongoose = require("mongoose");

const cancelledSchema = new mongoose.Schema({
  fullname: String,
  phonenumber: String,
  email: String,
  password: String,
  gender: String,
  type: String,
  date: String,
  service: String,
  counseling: String
}, { timestamps: true });

module.exports = mongoose.model("Cancelled", cancelledSchema);
