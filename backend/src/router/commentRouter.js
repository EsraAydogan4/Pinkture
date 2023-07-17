const express = require('express');
const router = express.Router();
const Comment = require('./commentModel');

// Yeni yorumu kaydetme
router.post('/', async (req, res) => {
  try {
    const { content, author, profileImg, description } = req.body;
    const newComment = new Comment({ content, author, profileImg, description });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json({ error: 'Yorum kaydedilemedi' });
  }
});

// Tüm yorumları alma
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Yorumlar alınamadı' });
  }
});

// Yorumu güncelleme
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { content, author, profileImg, description } = req.body;
    const updatedComment = await Comment.findByIdAndUpdate(id, {
      content,
      author,
      profileImg,
      description,
    });
    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: 'Yorum güncellenemedi' });
  }
});

// Yorumu silme
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
    res.json({ message: 'Yorum silindi' });
  } catch (error) {
    res.status(500).json({ error: 'Yorum silinemedi' });
  }
});

module.exports = router;
