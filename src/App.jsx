import { useEffect, useContext, useState } from 'react'
import Header from './pages/Header'
import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { UserCtx } from './context/userContext';
import  './App.css';


function App() {
  const { user, setUser } = useContext(UserCtx);
  // luego de renderizar 
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  }, []); 
  return (
    <>
      <Box id="contenedor" sx={{width:'100%', padding:0, margin:0}}>
        <Box id="header_box" sx={{position:'fixed', width:'100%', zIndex:2 }}>
          <Header/>
        </Box>
        <Box id="content_box" 
          sx={{     
            display:'grid', 
            paddingTop:'40px',
            justifyContent:'center', 
            justifyItems:'center', 
            alignItems:'center',
            height: 'calc(100vh - 80px)'}}>
          <Outlet />
        </Box>
      </Box>
    </>
  )
}

export default App
