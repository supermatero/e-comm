import * as React from 'react';
import { Box, Button, Card, FormControl, FormLabel, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import Logo from '../assets/logo.png';
import {auth} from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    createUserWithEmailAndPassword(auth, email, password)
    .then( (userCredential) =>{
       const user = userCredential.user;
       //console.log('User created :', user);
       navigate('/homeprotected');
    })
    .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.error('Error creating user:', errorCode, errorMessage);
     })

  };
  return (
    <>
    <Paper elevation={3} sx={{display:{xs:'contents', md:'block'}, justifyContent: 'center', height:'350px', width: '400px' , p: 6, mt:6}}>
      <Stack>    
        <Card sx={{ boxShadow:'none', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 
          <IconButton edge="start" aria-label="menu" sx={{ margin:0, padding:0}} >
            <Box component="img" sx={{ height:60, width: 60,  maxHeight: { xs: 50, md: 60 }, maxWidth: { xs: 50, md: 60 }, }} alt="logo" src={Logo} />
          </IconButton>
     
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} >
            <FormControl>
              <FormLabel htmlFor="email">Usuario</FormLabel>
              <TextField required fullWidth id="email" placeholder="youremail@mail.com" name="email" autoComplete="email" variant="outlined" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <TextField required fullWidth name="password" placeholder="••••••" type="password" id="password" autoComplete="new-password" variant="outlined"/>
            </FormControl>
            <Button type="submit" fullWidth  variant="contained">Registrarse</Button>
          </Box>
          </Card>
        </Stack>
      </Paper>
    </>
  )
}
