import React, { useState, useEffect } from 'react';
import './CommentPage.css';
import axios from 'axios';
import redHeart from './redHeart.jpg';
import greyHeart from './greyHeart.jpg';


function CommentPage() {
  const [newComment, setNewComment] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [comments, setComments] = useState([]);
  const [isLiked, setLiked] = useState(false);


  useEffect(() => {
    getComments();
  }, []);


  const handleLike = () => {
    setLiked(!isLiked);
  };
  

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const newCommentData = {
      content: newComment,
      author: {
        name: newAuthor,
      },
    };

    try {
      const response = await axios.post('/api/comments', newCommentData);
      const savedComment = response.data;
      setComments([...comments, savedComment]);
      setNewComment('');
      setNewAuthor('');

      getComments();
    } catch (error) {
      console.error('Yorum kaydedilemedi:', error);
    }
  };
  const getComments = async () => {
    try {
      const response = await axios.get('/api/comments');
      setComments(response.data.comments);
    } catch (error) {
      console.error('Yorumlar alınamadı:', error);
    }
  };
  

  return (
    <div className="comment-page-container">
      <img className="mainPic" src="/img/ahalteke.jpg" alt="" />
      <div className="profile-info">
        <div className="profile-img">
          <img src="/img/kedicik.jpg" alt="Profil Resmi" />
          <div className="profile-text">
            <span className="profile-name">Şirin Güneş</span>
            <span className="image-description">Rüzgar bugün de mükemmel!</span>
          </div>
          <div className={`${isLiked ? 'like-icon liked' : 'like-icon'}`} onClick={handleLike}>
            <img src={isLiked ? redHeart : greyHeart} alt="Beğen" />
          </div>
        </div>
      </div>
      <form className="comment-page-form" onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="Adınızı girin"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          className="comment-page-input"
        />
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
          comments.map((comment) => (
            <div key={comment._id} className="comment-page-comment">
              <div className="comment-content">
                <div className="comment-username">{comment.author.name}</div>
                <div className="comment-text">{comment.content}</div>
              </div>
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
