import React from 'react'
import Navbar from './Navbar'
import Typography from '@mui/material/Typography'
import Logo from '../assets/logo.png';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import { RiLoginBoxLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton  edge="start" aria-label="menu" >
            <Box component="img" sx={{ height:70, width: 70,  maxHeight: { xs: 60, md: 70 }, maxWidth: { xs: 60, md: 70 }, }} alt="logo" src={Logo} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>E-Comm.</Typography>
          <Link to={"/signup"} >
            <RiLoginBoxLine size="25" color="white" />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
    <Box>
      {/* <Navbar/> */}
    </Box>
    </>
  )
}
