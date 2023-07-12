const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  profileImg: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: 'Rüzgar bu günde mükemmel!',
  },
});
async function createComment(commentData) {
  try {
    // MongoDB bağlantısı başarılı olduğunu varsayarak işlemleri gerçekleştirin
    const newComment = new Comment({
      content: commentData.content,
      author: commentData.author,
    });

    const savedComment = await newComment.save();
    return savedComment._id; // Oluşturulan yorumun _id değerini döndürün
  } catch (error) {
    throw new Error('Yorum kaydedilemedi');
  }
}

// Kullanım örneği
const commentData = {
  content: "Yorum içeriği",
  author: "Yorum yapanın adı",
};

createComment(commentData)
  .then((commentId) => {
    console.log("Yorum başarıyla oluşturuldu. ID:", commentId);
  })
  .catch((error) => {
    console.error("Yorum oluşturulamadı:", error.message);
  });
  const newCommentData = {
    content: 'Yeni yorum',
    author: {
      name: 'John Doe',
    },
  };
  
  const newComment = new Comment(newCommentData);
  
  newComment.save()
    .then((savedComment) => {
      console.log('Yeni yorum kaydedildi:', savedComment);
    })
    .catch((error) => {
      console.error('Yorum kaydedilemedi:', error);
    });
  

module.exports = mongoose.model('Comment', CommentSchema);
