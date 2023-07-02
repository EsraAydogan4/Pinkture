import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

const Pano = ({ boardList }) => {
  const { id } = useParams();

  if (!boardList) {
    return <div>Pano bulunamadı.</div>;
  }

  const foundBoard = boardList.find(board => board.id === parseInt(id));

  if (!foundBoard) {
    return <div>Pano bulunamadı.</div>;
  }

  return (
    <div>
      <h1>Pano Detayları</h1>
      <div className="board-details">
        <div className="board-settings">
          <button>Edit Board</button>
        </div>
        <div className="board-title">{foundBoard.title}</div>
        <div className="board-pins">
          {foundBoard.pins.map(pin => (
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
      </div>
    </div>
  );
};

export default Pano;
