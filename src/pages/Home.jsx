import React from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { MenuList } from '../data/data'
export default function Home() {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          MenuList.map( menu => (
           <Grid item key={menu.id} sx={{ maxWidth:'300px', m:2 }}>
    
              <CardActionArea>
                <CardMedia component={'img'} sx={{minHeight:'300px'}} src={menu.image} alt={menu.name} />
              </CardActionArea>
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>{menu.name}</Typography>
                <Typography variant='body2' color='text.secondary'>{menu.description}</Typography>


{/* 
                <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'10px'}}>
                 
                  <p>Price: ${menu.price}</p>
                </Box> */}

                <Button variant="contained" color="primary">Add to Cart</Button>
              </CardContent>
           </Grid>
          ))
        }
      </Grid>
    </>
  )
}
