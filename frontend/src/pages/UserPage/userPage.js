import React, { useState } from 'react';
import './userPage.css'; // Stil dosyanızın yolunu doğru şekilde güncelleyin
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserPage = () => {
  const handleShare = () => {
    alert('Shared!');
  };

  const [boardList, setBoardList] = useState([
    {
      id: 1,
      title: 'Travel Inspiration',
      pins: [
        {
          id: 1,
          image: 'https://picsum.photos/500/300?random=1',
          likes: 10,
          comments: 5,
          shares: 2
        },
        {
          id: 2,
          image: 'https://picsum.photos/500/300?random=2',
          likes: 8,
          comments: 2,
          shares: 1
        }
      ]
    },
    {
      id: 2,
      title: 'Food Recipes',
      pins: [
        {
          id: 3,
          image: 'https://picsum.photos/500/300?random=3',
          likes: 15,
          comments: 3,
          shares: 0
        },
        {
          id: 4,
          image: 'https://picsum.photos/500/300?random=4',
          likes: 6,
          comments: 1,
          shares: 4
        }
      ]
    }
  ]);

  const createNewBoard = () => {
    const newBoard = {
      id: boardList.length + 1,
      title: 'New Board',
      pins: []
    };

    setBoardList(prevList => [...prevList, newBoard]);
  };

  return (
    <div>
      <div className="profile">
        <div className="profile-image">
          <img src="https://picsum.photos/200/300" alt="" />
        </div>

        <div className="profile-info">
          <div className="profile-name">
            John Doe
            <FontAwesomeIcon className="share-icon" icon={faShare} onClick={handleShare} />
          </div>

          <div className="profile-username">@johndoe</div>
          <div className="profile-bio">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, veritatis?</div>
          <div className="profile-location">Istanbul, Turkey</div>

          <div className="profile-stats">
            <div className="stat">
              <span className="stat-value">500</span>
              <span className="stat-label">Followers</span>
            </div>

            <div className="stat">
              <span className="stat-value">200</span>
              <span className="stat-label">Following</span>
            </div>

            <div className="stat">
              <span className="stat-value">1000</span>
              <span className="stat-label">Pins</span>
            </div>

            <button className="user-edit-button">
              <Link to="/pages/UserSettings/" className="user-edit-button-text">
                Edit Profile
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="user-create-board">
        <button className="user-create-board-button" onClick={createNewBoard}>
          Create New Board
        </button>
      </div>

      <div className="boards">
        {boardList.map(board => (
          <div className="board" key={board.id}>
            <Link to={`/pages/Pano/${board.id}`} className="board-link">
              <div className="board-title">{board.title}</div>
              <div className="board-pins">
                {board.pins.map(pin => (
                  <div className="user-pin" key={pin.id}>
                    <img src={pin.image} alt={`Pin ${pin.id}`} />
                    <div className="user-pin-actions">
                      <div className="user-pin-action">
                        <FontAwesomeIcon icon={faHeart} />
                        {pin.likes}
                      </div>
                      <div className="user-pin-action active">
                        <FontAwesomeIcon icon={faComment} />
                        {pin.comments}
                      </div>
                      <div className="user-pin-action">
                        <FontAwesomeIcon icon={faShare} />
                        {pin.shares}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
