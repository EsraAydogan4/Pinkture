<<<<<<< HEAD:src/App.js
=======
// app.js
// import './Reset.css';
>>>>>>> 8d1369f1dd6287b1ecccc7a1e1cbbda0a87d00e3:frontend/src/App.js
import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
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
          <Route path="/pages/comment" element={<CommentPage />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
