import { useState } from 'react'

import './App.css'
import Header from './pages/Header'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Header/>
      <main id="main">
        <Outlet />
      </main>
    </>
  )
}

export default App
