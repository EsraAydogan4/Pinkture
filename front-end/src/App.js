import './App.css';
//import React from 'react';
import { useEffect } from "react";
import Pin from './Components/Pin';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Messages from './pages/Messages';
// import User from './pages/User';
import Home from './pages/Home';
// import Notifications from './pages/Notifications';
// import Settings from './pages/Settings';
// import Anasayfa from './Components/Anasayfa';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './pages/Login/login';
import Register from './pages/Register/register';

function App() {
  
  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContainer");

    function setMenuActive() {
      allIcon.forEach((n) => n.classList.remove("black"));
      this.classList.add("black");
    }

    allIcon.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);
  return (   

    <div className="App">
      
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path='/pages/login' element={<Login />} />
          <Route path='/pages/register' element={<Register />} />
      </Routes>
    </Router> 
      

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
      
      
    </div>
  );
}


export default App;