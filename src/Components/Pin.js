//import { Share } from '@mui/icons-material';
import React from 'react';

function Pin({ pinSize }) {
 

  return (
    <div className={`pin ${pinSize}`}>
      <a href="./comment.html" target="_blank" >
        <img className="mainPic" src="./img/kedi.jpg" alt="" />
      </a>
      <div className="content">
        <h3>Minnoş</h3>
        <div className="search">
          {/* <img
              src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/icons8-forward-arrow-100.png?alt=media&token=3f56e775-43c1-41d3-a0c4-90217b31b5be"
              alt=""
            /> */}
        </div>
      </div>
    </div>
  );
}

export default Pin;
