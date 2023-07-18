const Comment = require('./commentModel');

async function createComment(commentData) {
    try {
      const newComment = new Comment({
        content: commentData.content,
        author: commentData.author,
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

async function deleteComment(commentId) {
  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId);
    return deletedComment;
  } catch (error) {
    throw new Error('Yorum silinemedi');
  }
}

async function updateComment(commentId, updatedData) {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      updatedData,
      { new: true }
    );
    return updatedComment;
  } catch (error) {
    throw new Error('Yorum güncellenemedi');
  }
}

// POST /api/comments endpoint to create a new comment
app.post('/api/comments', async (req, res) => {
  try {
    const { isim, yorum, id } = req.query; // ID'yi de istek parametrelerinden al

    const commentData = {
      _id: id, // ID'yi kullan
      content: yorum,
      author: {
        name: isim,
      },
    };

    const createdComment = await createComment(commentData);

    res.status(201).json(createdComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Yorum kaydedilemedi' });
  }
});

// GET /api/comments endpoint to retrieve all comments
app.get('/api/comments', async (req, res) => {
  try {
    const comments = await getAllComments();
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Yorumlar alınamadı' });
  }
});

// DELETE /api/comments/:id endpoint to delete a comment by its ID
app.delete('/api/comments/:id', async (req, res) => {
  try {
    const commentId = req.params.id;
    const deletedComment = await deleteComment(commentId);
    res.json(deletedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Yorum silinemedi' });
  }
});

// PUT /api/comments/:id endpoint to update a comment by its ID
app.put('/api/comments/:id', async (req, res) => {
  try {
    const commentId = req.params.id;
    const updatedData = req.body;
    const updatedComment = await updateComment(commentId, updatedData);
    res.json(updatedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Yorum güncellenemedi' });
  }
});

module.exports = {
  createComment,
  getAllComments,
  deleteComment,
  updateComment,
};
