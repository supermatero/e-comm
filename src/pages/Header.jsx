import React from 'react'
import Navbar from './Navbar'
import Typography from '@mui/material/Typography'
import Logo from '../assets/logo.png';
import { AppBar, Box, Button, IconButton, Toolbar, Tooltip } from '@mui/material';
import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

import { useContext } from 'react'
import { UserCtx } from '../context/userContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export default function Header() {
  const { user, setUser } = useContext(UserCtx);
  const handleLogout = () => {
      auth.signOut().then(() => {
        setUser(null);
      })
      .catch( err=>console.error("error al hacer logout: " + err) );
  };
  return (
    <>
    <Box sx={{ flexGrow: 1}}>
      <AppBar id="app_bar" position="static">
        <Toolbar>
          <IconButton href="/" edge="start" aria-label="menu">
            <Box component="img" sx={{ height:70, width: 70,  maxHeight: { xs: 60, md: 70 }, maxWidth: { xs: 60, md: 70 }, }} alt="logo" src={Logo} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display:{xs:'none'} }}>E-Comm.</Typography>
          <Box sx={{ flexGrow: 12}}>
            <Navbar/> 
          </Box>
          {
            user? (
              <Tooltip title="Salir">
                <Button color="inherit" onClick={handleLogout}><RiLogoutBoxFill size="25" color="white" /></Button>
              </Tooltip>
            ) : (
              <Link to={"/signin"} >
                <Tooltip title="Ingresar">
                <Button color="inherit"><RiLoginBoxLine size="25" color="white" /></Button>
                </Tooltip>
              </Link>
            )}

        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}
