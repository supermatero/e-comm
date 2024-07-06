import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
//import { MenuList } from '../data/data'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import {app } from '../firebase';
import Product from './Product';

//importar imagenes
import Labial1 from '../assets/713651_1_2.jpg';
import Labial2 from '../assets/705798_1_8.jpg';
import Labial3 from '../assets/707372_1_8.jpg';
import Labial4 from '../assets/739979_1_8.jpg';
import Labial5 from '../assets/707604_1_2.jpg';
import Labial6 from '../assets/749960_1_2.jpg';
import Labial7 from '../assets/576884_1_8.jpg';
import Labial8 from '../assets/733808_2_8.jpg';
import Labial9 from '../assets/703728_3_2.jpg';
import Labial10 from '../assets/703421_1_8.jpg';
import { Link } from 'react-router-dom';

const images = {
  '713651_1_2.jpg': Labial1,
  '705798_1_8.jpg': Labial2,
  '707372_1_8.jpg': Labial3,
  '739979_1_8.jpg': Labial4,
  '707604_1_2.jpg': Labial5,
  '749960_1_2.jpg': Labial6,
  '576884_1_8.jpg': Labial7,
  '733808_2_8.jpg': Labial8,
  '703728_3_2.jpg': Labial9,
  '703421_1_8.jpg': Labial10
}


export default function Home() {
  
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = React.useState(false);      // dialog

  useEffect(()=>{
    const getProducts = async ()=>{

      const db = getFirestore(app);
      const productRef = collection(db, 'productos');
      const productSnapshot = await getDocs(productRef);

      const productsData = productSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsData);
    }
    getProducts();
  }, []);
  // dialog
  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Box id="box-home-grid" 
        sx={{ 
          marginTop: '80px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
        <Grid id="mygrid"
          container 
          spacing={2}
          justifyContent="center"
          alignItems="stretch">
          {
            products.map( product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea>
                  <CardMedia component={'img'} sx={{height: 200, objectFit: 'cover'}} src={images[product.image]} alt={product.name} />
                </CardActionArea>

                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography variant='h5' gutterBottom component={'div'}>{product.name}</Typography>
                  {/* <Typography variant='body2' color='text.secondary'>{product.description}</Typography> */}

                  <Typography variant='body1' color="primary"  component={'div'}>Precio : ${product.price}</Typography>
                  
                  <Button 
                    variant="outlined" 
                    color="warning" 
                    sx={{ marginTop: 2 }}
                    onClick={ ()=>handleClickOpen(product)}
                    >Detalles</Button>
                  
                  <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>Add to Cart</Button>
                </CardContent>
                </Card>
            </Grid>
            ))
          }
        </Grid>
      </Box>
      <Product open={open} handleClose={handleClose} product={selectedProduct} images={images}/>
    </>
  )
}
