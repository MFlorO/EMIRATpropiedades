import { useState } from 'react';
import { Button, Grid, IconButton, useMediaQuery, useTheme } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';





const Carousell = ({ imagen, cantidadImagDesktop, onClickImagenSeleccionada }) => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 

    const [selectedIndex, setSelectedIndex] = useState(0);

    const cantidadSegunResponsive = isSmallScreen? 1 : cantidadImagDesktop


    const anterior = () => setSelectedIndex((selectedIndex - cantidadSegunResponsive + imagen.length) % imagen.length)
    const siguiente = () => setSelectedIndex((selectedIndex + cantidadSegunResponsive) % imagen.length);

    const slicedImagen = imagen?.slice(selectedIndex, selectedIndex + cantidadSegunResponsive);


    return (

      <Grid container direction='column' width='100%' height='100%' justifyContent='center' alignItems='center'>

        <IconButton onClick={anterior} color='primary'><KeyboardArrowLeft sx={{fontSize:'15px'}}/></IconButton>

        <Grid container width={{xs:'80%', sm:'90%'}} height='100%' justifyContent='center' alignItems='center' gap={1}>
        {slicedImagen?.map( (e, index) => ( 
            <Grid item key={index} width={{xs:'100%', sm:'18%'}}  height='100%' backgroundColor='white'>
                <Button onClick={(e) => { onClickImagenSeleccionada(e)} }>
                  <img src={e} alt={e} style={{width:'100%', height:'100%', objectFit:'cover', objectPosition: 'center center'}} />
                </Button>
            </Grid>
        ))}
        </Grid>

        <IconButton onClick={siguiente} color='primary'><KeyboardArrowRight sx={{fontSize:'15px'}}/></IconButton>
        
        </Grid> 
    );
 }

export default Carousell;



