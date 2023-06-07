import React from 'react'
//import Anasayfa from '../Anasayfa'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled';
// import Typography from '@mui/material/Typography';
// import { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
// import { FaPlus } from 'react-icons/fa';
// import { FaSearch } from 'react-icons/fa';
// import { FaHome } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
//import { FaHeart } from 'react-icons/fa';

function NavBar() {
    const [setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    
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

      const GirisYapButonu = styled('div')(({ theme }) => ({
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
    {/* <GirisYap login={login} closeDialog={closeDialog} closeLogin={closeLogin} openRegister={openRegister} />
      <KayitOl register={register} closeDialog={closeDialog} closeRegister={closeRegister} openLogin={openLogin} /> */}
      <AppBar position="fixed" sx={{ bgcolor: "mistyrose", mt: 0 , maxHeight:70, justifyContent: 'center'}}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link to={'/'}>
              <img src="./Pinkture.jpg" alt="photo" width={"40px"} height={"40px"} padding={"10px"}></img>
            </Link>
            <OlusturButonu>Pin Ekle</OlusturButonu>
            
            <div className="searchBox">
            <input type="text" placeholder="Arama..." />
            </div>

            <Link to="./pages/notifications" style={{ textDecoration: "none" }} target='_blank'>
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
                }
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

            <GirisYapButonu>
            <Link to="./login.html" style={{ textDecoration: "none" }} target='blank'>
            <Button
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
            Giriş Yap</GirisYapButonu>




            </Toolbar>
        </Container>
      </AppBar>
    </>

  )
}


export default NavBar