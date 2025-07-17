const express = require("express");
const router = express.Router();
const Cancelled = require("../Model/cancelledModel");

router.get("/cancelled", async (req, res) => {
  try {
    const cancelled = await Cancelled.find();
    res.json(cancelled);
  } catch (err) {
    console.error("Error getting cancelled:", err);
    res.status(500).json({ error: "Failed to fetch cancelled appointments" });
  }
});

module.exports = router;
