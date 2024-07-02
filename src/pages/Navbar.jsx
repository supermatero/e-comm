import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'
export default function Navbar() {
  return (
    <>
      <nav className='navigation'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/signup"}>Signup</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/protected"}>Protected</NavLink>
      </nav>
    </>
  )
}
