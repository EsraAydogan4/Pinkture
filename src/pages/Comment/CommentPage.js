import React, { useState, useEffect } from 'react';
import './CommentPage.css';
import axios from 'axios';

function CommentPage() {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([ {
    content: 'Bu bir yorumdur',
    author: {
      profileImg: 'kedi1.jpeg',
      // Diğer kullanıcı bilgileri
    },
  },
  // Diğer yorumlar
]);
  useEffect(() => {
  // Sayfa yüklendiğinde yorumları getirme isteği yapılıyor
  getComments();
  }, []);

  const getComments = async () => {
    try {
      const response = await axios.get('/api/comments'); // Yorumları getirmek için GET isteği yapılıyor
      setComments(response.data);
    } catch (error) {
      console.error('Yorumlar alınamadı:', error);
    }
  };
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const newCommentData = {
      content: newComment,
      author: {
        name: 'Esra Aydoğan',
        profileImg: 'kedi.jpeg',
      },
    };
    try {
      const response = await axios.post('/api/comments', newCommentData);
      const savedComment = response.data;
      setComments([...comments, savedComment]);
      setNewComment('');
    } catch (error) {
      console.error('Yorum kaydedilemedi:', error);
    }
  };
  const createComment = async (newCommentData) => {
    try {
      const response = await axios.post('/api/comments', newCommentData); // Yeni yorum oluşturmak için POST isteği yapılıyor
      const savedComment = response.data;
      setComments([...comments, savedComment]);
    } catch (error) {
      console.error('Yorum kaydedilemedi:', error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await axios.delete(`/api/comments/${commentId}`); // Yorumu silmek için DELETE isteği yapılıyor
      const updatedComments = comments.filter((comment) => comment.id !== commentId);
      setComments(updatedComments);
    } catch (error) {
      console.error('Yorum silinemedi:', error);
    }
  };


  return (
    <div className="comment-page-container">
      <img className="mainPic" src="/img/ahalteke.jpeg" alt="" />
      <form className="comment-page-form" onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="Yorumunuzu girin"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="comment-page-input"
        />
        <button type="submit" className="comment-page-button">
          Yorum Yap
        </button>
      </form>
      <div className="comment-page-comments">
        <h2>Yorumlar</h2>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="comment-page-comment">
              <div className="comment-profile">
                <img src={`/profiles/${comment.author.profileImg}`} alt="Profil Resmi" />
              </div>
              <div className="comment-content">{comment.content}</div>
              <div className="comment-description">{comment.description}</div>
            </div>
          ))
        ) : (
          <div>Henüz yorum yok.</div>
        )}
      </div>
    </div>
  );
}

export default CommentPage;
