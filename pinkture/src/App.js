import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Add, Chat, Notifications, FavoriteRounded, Person, QuestionMark} from "@mui/icons-material";
import MenuContainer from './Components/MenuContainer';
import { useEffect } from "react";
import Pin from './Components/Pin';



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
      <div className="menuContainer">
      <img src="./Pinkture.jpg" width="24" height="24" 
      alt="Web Sitesi Logosu" />    

        <div className="subMenu">
          <div>
            <MenuContainer icon={<Person />}/>
            <MenuContainer icon={<Notifications />}/>
            <MenuContainer icon={<Chat />}/>
          </div>
          <div>
            <MenuContainer icon={<FavoriteRounded />}/>
          </div>
          <div>
            <MenuContainer icon={<QuestionMark />}/>
            <MenuContainer icon={<Add />}/>
          </div>
        </div>  
      </div>
      <main>
        <div className="searchBox">
          <input type="text" placeholder="Search" />
        </div>
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
