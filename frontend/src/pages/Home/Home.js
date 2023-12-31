import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Pin from './Components/Pin';
import "./Pin.css";

function Pin({ pinSize }) {
 

  return (
    <div className={`pin ${pinSize}`}>
      <a href="./pages/comment" target="_blank" >
        <img className="mainPic" src="./img/ahalteke.jpg" alt="" />
      </a>
      <div className="content">
        <h3>Rüzgar</h3>
        <div className="search"></div>
      </div>
    </div>
    
  );
}

function Home() {
  const navigate=useNavigate();

  return (
    <>
      <div>
      
    </div>
    <main>
        
        <div className='mainContainer'>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
        </div>
      </main>
    </>
  );
}

export default Home