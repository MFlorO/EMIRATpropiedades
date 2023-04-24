import { useState } from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";




const Carousell = ({ p }) => {

    const { imagen, id } = p

    const [selectedIndex, setSelectedIndex] = useState(0);

    const anterior = () => setSelectedIndex((selectedIndex - 1 + imagen.length) % imagen.length)
    const siguiente = () => setSelectedIndex((selectedIndex + 1) % imagen.length);

    const slicedImagen = imagen?.slice(selectedIndex, selectedIndex + 1);

    return (

      <Grid container direction={{xs:'column', sm:'column'}} width='100%' height='100%' justifyContent='center' alignItems='center'>

        <IconButton onClick={anterior} size='small'><KeyboardArrowLeft sx={{fontSize:'18px'}}/></IconButton>

        <Grid container width={{xs:'80%', sm:'85%'}} height='100%' alignItems='center' justifyContent='center'>
        {slicedImagen?.map( (e, index) => ( 
            <Grid item key={index} width='100%' height='100%' backgroundColor='white'>
               <Link to={`/tienda/detalle/${p.id}`}>
                <img src={e} alt={e} style={{width:'100%', height:'100%', objectFit:'cover', objectPosition: 'center center'}} />
               </Link>
            </Grid>
        ))}
        </Grid>

        <IconButton onClick={siguiente}><KeyboardArrowRight sx={{fontSize:'18px'}}/></IconButton>
        
        </Grid> 
    );
 }

export default Carousell;





const TypographyNombre = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.typography.h2.fontFamily,
  fontSize: '15px',
  fontWeight: 600,
}));





const TypographyPrecio = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: theme.typography.h2.fontFamily,
  fontSize: '15px',
  fontWeight: 600,
}));
