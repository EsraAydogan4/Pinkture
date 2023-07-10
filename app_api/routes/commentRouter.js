const express = require('express');
const router = express.Router();
const Comment = require('./commentModel');

// Yeni yorumu kaydetme
router.post('/comments', async (req, res) => {
  try {
    const { content } = req.body;
    const newComment = new Comment({ content });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json({ error: 'Yorum kaydedilemedi' });
  }
});

// Tüm yorumları alma
router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Yorumlar alınamadı' });
  }
});

module.exports = router;
