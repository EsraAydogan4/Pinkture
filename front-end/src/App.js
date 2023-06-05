import './App.css';
//import React from 'react';
import { useEffect,useState } from "react";
import Pin from './Components/Pin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Messages from './pages/Messages';
// import User from './pages/User';
// import Home from './pages/Home';
//import Notifications from './pages/Notifications';
import Notification from "@material-ui/core/Notification";
// import Settings from './pages/Settings';
// import Anasayfa from './Components/Anasayfa';
import NavBar from './Components/NavBar';
import Snackbar from '@material-ui/core/Snackbar';

const App = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const handleChange = () => {
      setNotification({
        message: "This is a notification",
      });
    };

    // Listen for changes to the notification state
    const subscription = notification.subscribe(handleChange);

    // Unsubscribe when the component unmounts
    return () => subscription.unsubscribe();
  }, []);

  const showNotification = () => {
    const notification = new Notification("This is a notification");
  };



// function App() {
//   useEffect(() => {
//     const allIcon = document.querySelectorAll(".iconContainer");

//     function setMenuActive() {
//       allIcon.forEach((n) => n.classList.remove("black"));
//       this.classList.add("black");
//     }

//     allIcon.forEach((n) => n.addEventListener("click", setMenuActive));
//   }, []);
  return (   
    <div className="App">
      
    
      <NavBar />
      <Routes>
        <Route>
        
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
              {message}
            </Alert>
          </Snackbar>
        
        </Route>
        {/* <Route path="/Home" element={<Home/>} />
        <Route path="/Messages" element={<Messages/>} />
        <Route path="/Notifications" element={<Notifications/>} />
        <Route path="/Settings" element={<Settings/>} />          
        <Route path="/User" element={<User/>} /> */}
      </Routes> 
   
      

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
