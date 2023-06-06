import './App.css';
//import React from 'react';
import { useEffect } from "react";
import Pin from './Components/Pin';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Messages from './pages/Messages';
// import User from './pages/User';
// import Home from './pages/Home';
// import Notifications from './pages/Notifications';
// import Settings from './pages/Settings';
// import Anasayfa from './Components/Anasayfa';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './pages/login';

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
        <Route path='./pages/login' element={<Login />} />
      </Routes>
      
      {/* <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Messages" element={<Messages/>} />
        <Route path="/Notifications" element={<Notifications/>} />
        <Route path="/Settings" element={<Settings/>} />          
        <Route path="/User" element={<User/>} />
      </Routes> */}
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