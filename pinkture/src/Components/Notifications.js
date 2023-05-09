import React from 'react'

function Notifications() {
    
    const bell = document.querySelector('label');
    const container = document.querySelector('.container');

    function clicked() {
      if (bell.className === "fas fa-bell") {
        bell.className = "fas fa-times";
      }else{
        bell.className = "fas fa-bell";
      } } 
  return (
    <div>
      
    </div>
  )
}

export default Notifications
