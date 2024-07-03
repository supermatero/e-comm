import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Card, Paper } from '@mui/material';


/* importaciones listas */

export default function Register() {
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  return (
    <>
    <Paper elevation={3} sx={{display:{xs:'contents', md:'block'}, justifyContent: 'center', height: '400px', width: '500px' , p: 6, mt:6}}>
          <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', my:1 }} >Registrarse</Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} >
            <FormControl>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <TextField autoComplete="name" name="name" required fullWidth id="name" placeholder=""/>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField required fullWidth id="email" placeholder="your@email.com" name="email" autoComplete="email" variant="outlined" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField required fullWidth name="password" placeholder="••••••" type="password" id="password" autoComplete="new-password" variant="outlined"/>
            </FormControl>
            <Button type="submit" fullWidth  variant="contained">Registrarse</Button>
          </Box>
      </Paper>
    </>
  )
}
