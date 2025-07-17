const express = require('express');
const router = express.Router();
const Message = require('../Model/messageModel');

// GET all messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new message
router.post('/messages', async (req, res) => {
  const { sender, text, timestamp } = req.body;
  const message = new Message({ sender, text, timestamp });
  
  try {
    const savedMessage = await message.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
