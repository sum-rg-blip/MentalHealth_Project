const express = require('express');
const router = express.Router();
const Register = require("../Model/registerModel");
const Cancelled = require("../Model/cancelledModel");

// Create new appointment
router.post("/register/create", async (req, res) => {
    try {
        const newRegister = new Register({
            fullname: req.body.fullname,
            phonenumber: req.body.phonenumber,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,
            type: req.body.type,
            date: req.body.date,
            service: req.body.service || "",
            counseling: req.body.counseling || ""
        });
        const saved = await newRegister.save();
        res.send(saved);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
});

// Read all appointments
router.get("/register/read", async (req, res) => {
    try {
        const registrations = await Register.find();
        res.send(registrations);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
});

router.delete("/register/delete/:id", async (req, res) => {
  console.log("🗑️ DELETE /register/delete/:id hit with id:", req.params.id);
  try {
    const deleted = await Register.findByIdAndDelete(req.params.id); // ✅ THIS IS CORRECT
    if (!deleted) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Delete route with logging cancelled
router.delete("/register/delete/:id", async (req, res) => {
  try {
    const appointment = await Register.findById(req.params.id);
    if (!appointment) return res.status(404).json({ message: "Not found" });

    const cancelled = new Cancelled(appointment.toObject());
    await cancelled.save();
    await appointment.deleteOne();

    res.status(200).json({ message: "Cancelled and logged" });
  } catch (err) {
    console.error("❌ Delete error:", err);
    res.status(500).json({ error: "Failed to cancel" });
  }
});


module.exports = router;
