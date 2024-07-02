import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Register from './pages/Register.jsx'
import Notfound from './pages/Notfound.jsx'
import HomeProtected from './pages/HomeProtected.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route index element={<Home/>} />

          <Route path='/signup' element={<Signup /> } />
          <Route path='/register' element={<Register />} />

          <Route path='/protected' element={<HomeProtected />} />
          <Route path='*' element={<Notfound />} />
        </Route>

        
        <Route  />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
