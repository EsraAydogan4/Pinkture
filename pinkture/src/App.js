import './App.css';
import { useEffect } from "react";
import Home from './pages/Home/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
// import loginRoute from './back-end/app_api/routes/loginRoute.js';

var createError=require('http-errors');
var express=require('express');
var path=require('path');
var cookieParser=require('cookie-parser');
var logger=require('morgan');
require('./app_api/models/db'); 
var indexRouter=require('./app_server/routes/index');
var app=express();






function App() {
  
  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContainer");

    function setMenuActive() {
      allIcon.forEach((n) => n.classList.remove("black"));
      this.classList.add("black");
    }

    allIcon.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);

  const app=express();
  app.use('/',loginRoute);
  app.listen(port, ()=>{
    console.log('Application running on port: ${port}');
  });
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
      

      
      
      
    </div>
  );
}


export default App;