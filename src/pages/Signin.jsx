import { Box, Button, Card, FormControl, FormLabel, IconButton, Link, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Logo from '../assets/logo.png';
import {auth} from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Signup() {


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get('email');
    const password = data.get('password');
    
    signInWithEmailAndPassword(auth, email, password)
    .then( (userCredential) =>{
       const user = userCredential.user;
       console.log('User signed in:', user);
 
    })
    .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.error('Error signin in:', errorCode, errorMessage);
     })


  };
  return (
    <>
      <Paper elevation={3} sx={{display:{xs:'contents', md:'block'}, justifyContent: 'center', height: '300px', width: '400px' , p: 6, mt:6}}>
        <Stack>
        <Card sx={{ boxShadow:'none', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 
            <IconButton  edge="start" aria-label="menu" sx={{ margin:0, padding:0}} >
            <Box component="img" sx={{ height:60, width: 60,  maxHeight: { xs: 50, md: 60 }, maxWidth: { xs: 50, md: 60 }, }} alt="logo" src={Logo} />
            </IconButton>  
            <Box component="form" onSubmit={handleSubmit}  noValidate sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2, }} >
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField id="email" type="email"  name="email" placeholder="youremail@email.com" autoComplete="email" autoFocus required fullWidth variant="outlined" sx={{ ariaLabel: 'email' }} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <TextField  name="password" placeholder="••••••" type="password" id="password" autoComplete="current-password" autoFocus required fullWidth variant="outlined"/>
              </FormControl>
              <Button type="submit" fullWidth variant="contained">Ingresar</Button>
              <Link
                href="/signup"
                variant="body2"
                sx={{ alignSelf: 'center' }}>
                No tiene una cuenta aún, Regístrese !!
              </Link>
            </Box>
          </Card>
        </Stack>
   </Paper>
    </>
  )
}


