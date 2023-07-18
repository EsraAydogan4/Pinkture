// app.js
import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import UserPage from './pages/UserPage/userPage';
import UserSettings from './pages/UserSettings/userSettings';
import Pano from './pages/Pano/pano';
import CommentPage from './pages/Comment/CommentPage'; 


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/login" element={<Login />} />
          <Route path="/pages/register" element={<Register />} />
          <Route path="/pages/userPage/*" element={<UserPage />} />
          <Route path="/pages/userSettings" element={<UserSettings />} />
          {/* <Route path="/pages/pano" element={<Pano />} /> */}
          <Route path="/pages/pano/:id" element={<Pano />} />
          <Route path="/pages/comment" element={<CommentPage />} /> 

        </Routes>
      </Router>
    </div>
  );
}

export default App;
