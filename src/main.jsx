import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signin from './pages/Signin.jsx'
import Register from './pages/Register.jsx'
import Notfound from './pages/Notfound.jsx'
import HomeProtected from './pages/HomeProtected.jsx'
import { UserCtxProvider} from './context/userContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserCtxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}> 
            <Route index element={<Home/>} />

            <Route path='/signin' element={<Signin /> } />
            <Route path='/signup' element={<Register />} />

            <Route path='/protected' element={<HomeProtected />} />
            <Route path='*' element={<Notfound />} />
          </Route>
          <Route  />
        </Routes>
      </BrowserRouter>
      </UserCtxProvider>
  </React.StrictMode>,
)
