import React from 'react'
import Anasayfa from '../Anasayfa'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import GirisYap from '../GirisYap';
import { useNavigate } from "react-router-dom";
import './Navbar.css';

function NavBar() {
  let navigate = useNavigate(); 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const closeLogin = () => {
      setLogin(false);
    }
    const openLogin = () => {
      navigate("/pages/login");
     // setLogin(true);
    }
    const closeRegister = () => {
      setRegister(false);
    }
    const openRegister = () => {
      setRegister(true);
    }
    const closeDialog = () => {
      setLogin(false);
      setRegister(false);
    }
    const OlusturButonu = styled('div')(({ theme }) => ({
        backgroundColor: "mistyrose",
        color: "black",
        cursor: 'pointer',
        width: '20%',
        border: '2px solid black',
        padding: '8px 8px',
        borderRadius: '15px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
        margin: '20px 20px',
        fontWeight: 'bold',
        textAlign: 'center',

    }));

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

      const GirisYapButonu = styled('button')(({ theme }) => (
        
        {
        backgroundColor: "mistyrose",
        color: "black",
        cursor: 'pointer',
        width: '25%',
        border: '2px solid black',
        padding: '8px 8px',
        borderRadius: '15px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
        margin: '18px 18px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '15px',
        
        

    }));


  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "mistyrose", mt: 0 , maxHeight:70, justifyContent: 'center'}}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* <a href='/'>
              <img src="./Pinkture.ico" alt="photo" width={"40px"} height={"40px"} padding={"10px"}></img>
            </a> */}
            <Link to="/">            
            <img src="/Pinkture.ico" alt="photo" width={"40px"} height={"40px"} padding={"10px"}></img>
            </Link>
            

            <OlusturButonu>Pin Ekle</OlusturButonu>
            
            <div className="searchBox">
            <input type="text" placeholder="Arama..." />
            </div>

            <Link to="./notifications.html" style={{ textDecoration: "none" }} target='blank'>
            <Button
                onClick={handleCloseNavMenu}
                sx={{
                my: 2,
                color: "black",
                display: "block",
                ml: 5,
                textTransform: "none",
                fontSize: "24px",
                padding: "0px",
                margin: "0px",
                "& > Typography": {
                    fontWeight: "bold",
                },
                }}
            >
                <FaBell />
            </Button>
            </Link>

            <Link to="./messages.html" style={{ textDecoration: "none" }} target='blank'>
            <Button
                onClick={handleCloseNavMenu}
                sx={{
                my: 2,
                color: "black",
                display: "block",
                ml: 5,
                textTransform: "none",
                fontSize: "24px",
                padding: "0px",
                margin: "0px",
                "& > Typography": {
                    fontWeight: "bold",
                },
                }}
            >
                <FaComment />
            </Button>
            </Link>

            <Link to="/pages/login" style={{ textDecoration: "none" }} target='blank'>
            <Button
                id="testgiris"
                onClick={handleCloseNavMenu}
                sx={{
                my: 2,
                color: "black",
                display: "flex",
                ml: -5,
                textTransform: "none",
                fontSize: "18px",
                padding: "0px",
                margin: "0px",
                "& > Typography": {
                    fontWeight: "bold",
                },
                }}
            >
                <FaUser/>
            </Button>
            </Link>
            {/* <GirisYapButonu bg="blue" type="submit" onClick={() => openLogin()}>
        Giriş Yap
      </GirisYapButonu> */}



            </Toolbar>
        </Container>
      </AppBar>
    </>

  )
}


export default NavBar