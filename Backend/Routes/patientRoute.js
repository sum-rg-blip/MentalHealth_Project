const express = require("express");
const router = express.Router();
const Patient = require("../Model/patientModel");

console.log("✅ patientRoute loaded");

// Create new patient from accepted appointment
router.post("/patients/create", async (req, res) => {
  console.log("✅ POST /patients/create hit with body:", req.body);
  try {
    const patient = new Patient({
      fullname: req.body.fullname,
      phonenumber: req.body.phonenumber,
      email: req.body.email,
      gender: req.body.gender,
      type: req.body.type,
      date: req.body.date,
      service: req.body.service,
      counseling: req.body.counseling
    });
    const savedPatient = await patient.save();
    res.status(201).json(savedPatient);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all patients
router.get("/patients", async (req, res) => {
  try {
    const patients = await Patient.find({});
    res.json(patients);
  } catch (err) {
    console.error("❌ Error fetching patients:", err);
    res.status(500).json({ error: "Failed to fetch patients" });
  }
});

// Delete patient by ID
router.delete("/patients/:id", async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    console.log(`🗑️ Patient with ID ${req.params.id} deleted`);
    res.status(200).json({ message: "Patient deleted" });
  } catch (err) {
    console.error("❌ Error deleting patient:", err);
    res.status(500).json({ error: "Failed to delete patient" });
  }
});

module.exports = router;
