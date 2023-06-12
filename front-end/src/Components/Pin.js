//import { Share } from '@mui/icons-material';
import React from 'react';

function Pin({ pinSize }) {
 

  return (
    <div className={`pin ${pinSize}`}>
      <a href="./comment.html" target="_blank" >
        <img className="mainPic" src="./img/british.jpg" alt="" />
      </a>
      <div className="content">
        <h3>Minnoş</h3>
        <div className="search"></div>
      </div>
    </div>
    
  );
}

export default Pin;
