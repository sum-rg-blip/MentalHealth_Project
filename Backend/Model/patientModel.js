const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  fullname: String,
  phonenumber: String,
  email: String,
  password: String,
  gender: String,
  date: String,
  type: String,
  service: String,       
  counseling: String    
});

module.exports = mongoose.model('Patient', patientSchema);
