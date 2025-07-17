const express = require('express');
const router = express.Router();
const Notification = require('../Model/NotificationModel');

// GET all notifications for a user
router.get('/:email', async (req, res) => {
  try {
    const notes = await Notification.find({ userEmail: req.params.email });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST new notification
router.post('/', async (req, res) => {
  const { userEmail, message } = req.body;
  try {
    const newNote = new Notification({ userEmail, message });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ message: 'Error creating notification' });
  }
});

// PATCH mark as seen
router.patch('/:id/seen', async (req, res) => {
  try {
    const updated = await Notification.findByIdAndUpdate(req.params.id, { seen: true }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating notification' });
  }
});

module.exports = router;
