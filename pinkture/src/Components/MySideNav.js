import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';

function MySideNav() {
  const navigate=useNavigate();
  return (
    <SideNav
     onSelect={selected=>{
        console.log(selected);
        navigate('/'+selected)
        }}>
          <SideNav.Toggle />
              <SideNav.Nav defaultSelected="home">
                  <NavItem>
                      <NavIcon><i class="fa-light fa-house-heart"></i>
                      <NavText>Home</NavText>
                      </NavIcon>
                  </NavItem>
                  <NavItem>
                      <NavIcon><i class="fa-regular fa-message-dots"></i>
                      <NavText>Messages</NavText>
                      </NavIcon>
                  </NavItem>
                  <NavItem>
                      <NavIcon><i class="fa-sharp fa-light fa-bell"></i>
                      <NavText>Notifications</NavText>
                      </NavIcon>
                  </NavItem>
                  <NavItem>
                      <NavIcon><i class="fa-light fa-user"></i>
                      <NavText>User</NavText>
                      </NavIcon>
                  </NavItem>
                  <NavItem>
                      <NavIcon><i class="fa-light fa-gear"></i>
                      <NavText>Settings</NavText>
                      </NavIcon>
                  </NavItem>
              </SideNav.Nav>
         </SideNav>
  )
}

export default MySideNav