import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography, OutlinedInput, DialogTitle, DialogContentText, DialogContent,  DialogActions, Dialog, Button, Box } from '@mui/material';


function Product({ open, handleClose, product, images}) {
    //console.log(product);
    if(!product){
      return null;
    }
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: '500px',
          height: '600px',
          m: 'auto',
          borderRadius: 2,
        }
      }}
      >
      <DialogTitle>
        <Typography  sx={{ width: '100%', fontSize: 'clamp(1rem, 4vw, 2rem)', color: 'secondary.main' }}>
          Detalle de Producto
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 1, }}>
      <Box component={'img'} 
          sx={{height: 150, objectFit: 'cover'}}
          src={images[product.image]}
          alt={product.name} />
      
      <Typography>{product.name}</Typography>
      <Typography>{product.price}</Typography>
      <Typography variant='body2'>Descripción:<br/>{product.description}</Typography>
      <Typography variant='overline' gutterBottom color="primary">Cantidad Disponible: {product.qty}</Typography>
      <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>Add to Cart</Button>
      </DialogContent>

      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

Product.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };
  export default Product;