import { useState } from 'react'

import './App.css'
import Header from './pages/Header'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

function App() {
  
  return (
    <>
      <Header/>
      <Container maxWidth="false" sx={{display:'flex', justifyContent:'center', alignContent:'center', width:'100%', height:'calc(100vh - 104px)'}}>
        <Outlet />
      </Container>
    </>
  )
}

export default App
