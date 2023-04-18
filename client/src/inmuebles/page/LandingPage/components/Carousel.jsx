import { useState } from 'react';
import { Grid, Button, useTheme, useMediaQuery, Typography } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/material/styles';


const style = {
  width:'100%', 
  height:'60%', 
  objectFit:'cover',
  transition: 'opacity 0.5s ease-in-out'
}

// onClick={() => navigate(`/contacto?c=alquilar&id=${p.id}`)}
// borderLeft={`3px solid ${theme.palette.secondary.main}`}





const Carousell = ({ elementos }) => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 

    const [selectedIndex, setSelectedIndex] = useState(0);

    const cantidadSegunResponsive = isSmallScreen? 1 : 6

    const anterior = () => setSelectedIndex((selectedIndex - cantidadSegunResponsive + elementos.length) % elementos.length)
    const siguiente = () => setSelectedIndex((selectedIndex + cantidadSegunResponsive) % elementos.length);
    const slicedElements = elementos?.slice(selectedIndex, selectedIndex + cantidadSegunResponsive);
        

    return (
      <Grid container direction='column' mt={{xs:30, sm:22}}  sx={{width:'100%', height:'30rem', maxHeight:'max-content'}} justifyContent='center' alignItems='center'>
      <Grid container direction='column' justifyContent='center' alignItems='center' mb={2}>
       <Typography variant="h3" fontWeight={600}>Inmuebles Destacados</Typography>
      </Grid>

      <Grid container width='100%' height='17rem' justifyContent='center' alignItems='center'>

        <Button onClick={anterior} size='small'><KeyboardArrowLeft/></Button>

        <Grid container width={{xs:'60%', sm:'90%'}} height='100%' direction='row' alignItems='center' justifyContent='space-around'>
        {slicedElements?.map( (e, index) => ( 
            <Grid item key={index} width={{xs:'100%', sm:'15%'}} height='100%' backgroundColor='white'>
                <img src={e} alt={e} style={style} />
                <Grid container direction='column' alignItems='center' gap={1}>
                  <TypographyNombre variant='p'>VENTA</TypographyNombre>
                  <TypographyPrecio variant='p'>$4545 USD</TypographyPrecio>
                  <Button variant='outlined' color='primary' size='small'>Ver Mas</Button>
                </Grid>
            </Grid>
        ))}
        </Grid>
            <Button onClick={siguiente} size='small' ><KeyboardArrowRight /></Button>
            </Grid> 
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
