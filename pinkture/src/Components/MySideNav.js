import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
//import React from 'react';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from 'react-router-dom';
import  home from './home.svg';
import  Messages from './message.svg';
import  user from './user.svg';
import  settings from './settings.svg';
import  notifications from './notifications.svg';
import { NavLink } from 'react-router-dom';



function MySideNav() {
  const navigate=useNavigate();
  return (
    <SideNav
     onSelect={selected=>
        {console.log(selected);
        navigate('/'+selected)
        }} 
        className="mysidenav"
        >
            <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-home" style={{ fontSize: 1.5}}></i> */}
                            <img width={45} src={home} alt="" />
                        </NavIcon>  
                      <NavText>Home</NavText>
                  </NavItem>
                  <NavItem eventKey="message"> 
                      <NavIcon>
                        {/* <i className="fa-regular fa-message-dots" style={{ fontSize: 1.5}}></i> */}
                        <img width={40} src={Messages} alt="" />
                      </NavIcon>
                      <NavText>Messages</NavText>
                  </NavItem>
                  <NavItem eventKey="notifications">
                      <NavIcon>
                        {/* <i className="fa-sharp fa-light fa-bell" style={{ fontSize: 1.5}}></i> */}
                        <img width={40} src={notifications} alt="" />
                      </NavIcon>
                      <NavText>Notifications</NavText>
                  </NavItem>
                  <NavItem eventKey="user">
                      <NavIcon>
                        {/* <i className="fa-light fa-user" style={{ fontSize: 1.5}}></i> */}
                        <img width={40} src={user} alt="" />
                      </NavIcon>
                      {/* <NavText>User</NavText> */}
                      <NavLink to="userPage.html" target='blank'>User</NavLink>
                  </NavItem>
                  <NavItem eventKey="settings">
                      <NavIcon>
                        {/* <i className="fa-light fa-gear" style={{ fontSize: 1.5}}></i> */}
                        <img width={40} src={settings} alt="" />
                    </NavIcon>
                      <NavText>Settings</NavText>
                  </NavItem>
              </SideNav.Nav>
         </SideNav>
  )
}

export default MySideNav