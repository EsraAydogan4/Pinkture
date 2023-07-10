const Comment = require('./commentModel');

async function createComment(commentData) {
  try {
    const newComment = new Comment({
      content: commentData.content,
      author: commentData.author, // Yorumu yapan kullanıcının kimliği
    });
    const savedComment = await newComment.save();
    return savedComment;
  } catch (error) {
    throw new Error('Yorum kaydedilemedi');
  }
}

async function getAllComments() {
  try {
    const comments = await Comment.find().populate('author');
    return comments;
  } catch (error) {
    throw new Error('Yorumlar alınamadı');
  }
}
app.post('/api/comments', (req, res) => {
    const { isim, yorum } = req.query;
  
    // Yorumu kaydetme işlemleri
  });
  

module.exports = {
  createComment,
  getAllComments,
};
