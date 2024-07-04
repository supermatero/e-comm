import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserCtx } from '../context/userContext';
export default function Navbar() {
  const { user } = useContext(UserCtx);
  return (
      <nav>
        <Box component={NavLink} to={"/"} sx={ ({ isActive }) => ({margin: { xs: '0 0.4rem', md: '0 1rem' }, textDecoration: 'none', color: isActive ? 'peru' : 'inherit'})}>Home</Box>
        {/* { !user &&(
          <>
            <Box component={NavLink} to={"/signup"} sx={ ({ isActive }) => ({margin: { xs: '0 0.4rem', md: '0 1rem' }, textDecoration: 'none', color: isActive ? 'peru' : 'inherit'})}>Signup</Box>
            <Box component={NavLink} to={"/register"} sx={ ({ isActive }) => ({margin: { xs: '0 0.4rem', md: '0 1rem' }, textDecoration: 'none', color: isActive ? 'peru' : 'inherit' })}>Register</Box>
          </>
        )} */}
        { user &&(
        <Box component={NavLink} to={"/protected"} sx={ ({ isActive }) => ({margin: { xs: '0 0.4rem', md: '0 1rem' }, textDecoration: 'none', color: isActive ? 'peru' : 'inherit' })}>Productos</Box>
        )}
      </nav>
  )
}
