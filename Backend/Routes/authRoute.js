const express = require('express');
const router = express.Router();
const Register = require('../Model/registerModel');
  // Adjust path exactly to your file

  console.log("✅ authRoute.js loaded");
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by exact email and password match
        const user = await Register.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Login successful response
        res.json({ message: "Login successful" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
