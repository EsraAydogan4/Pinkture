import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './pano.css';
import axios from "axios";


axios.post("http://localhost:3001/pages/pano").then(function(response){
      console.log(response);
    });
axios.put("http://localhost:3001/pages/pano").then(function(response){
      console.log(response);
    });
axios.get("http://localhost:3001/pages/pano").then(function(response){
      console.log(response);
    });



const Pano = ({ board }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedPins, setEditedPins] = useState([]);
  const [editedTitle, setEditedTitle] = useState('');
  


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
  
  const { id } = useParams();

  

  if (!boardList) {
    return <div>Pano bulunamadı.</div>;
  }

  const foundBoard = boardList.find(board => board.id === parseInt(id));

  if (!foundBoard) {
    return <div>Pano bulunamadı.</div>;
  }

  const deletePin = (pinId) => {
    const updatedPins = foundBoard.pins.filter(pin => pin.id !== pinId);
    const updatedBoard = { ...foundBoard, pins: updatedPins };
    const updatedBoardList = boardList.map(board => (board.id === foundBoard.id ? updatedBoard : board));
    setBoardList(updatedBoardList);
  };

  const openEditPanel = () => {
    setIsEditMode(true);
    setEditedPins([]);
    setEditedTitle('');
  };

  const closeEditPanel = () => {
    setIsEditMode(false);
    setEditedPins([]);
    setEditedTitle('');
  };

  const editPin = (pinId) => {
    setEditedPins(prevPins => [...prevPins, pinId]);
  };

  const saveEditedPins = () => {
    const updatedBoardList = boardList.map(board => {
      if (board.id === parseInt(id)) {
        const updatedPins = board.pins.map(pin => {
          if (editedPins.includes(pin.id)) {
            // Do your pin editing logic here
            // For example, update the pin's properties
            return {
              ...pin,
              likes: pin.likes + 1,
              comments: pin.comments + 1,
              shares: pin.shares + 1,
            };
          }
          return pin;
        });
        return { ...board, pins: updatedPins };
      }
      return board;
    });
    setBoardList(updatedBoardList);
    setIsEditMode(false);
    setEditedPins([]);
  };

  const saveEditedTitle = () => {
    const updatedBoardList = boardList.map(board => {
      if (board.id === parseInt(id)) {
        return { ...board, title: editedTitle };
      }
      return board;
    });
    setBoardList(updatedBoardList);
    setIsEditMode(false);
    setEditedTitle('');
  };

  return (
    <div>
      <h1>Board Details</h1>
      <div className="board-details">
        <div className="board-settings">
          {isEditMode ? (
            <div>
              <input
                type="text"
                value={editedTitle}
                onChange={e => setEditedTitle(e.target.value)}
              />
              <button onClick={saveEditedTitle}>Save</button>
              <button onClick={closeEditPanel}>Cancel</button>
            </div>
          ) : (
            <button onClick={openEditPanel}>Edit Board</button>
          )}
        </div>
        <div className="board-title">{isEditMode ? editedTitle : foundBoard.title}</div>
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
                {!isEditMode ? (
                <button className="delete-button" onClick={() => deletePin(foundBoard.id, pin.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                ) : (
                  <button className="edit-button" onClick={() => editPin(pin.id)}>
                    Edit
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pano;
