import { useState, useEffect } from 'react';
import { Grid, Button, Stack, useTheme, useMediaQuery } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';




const style = {
  width:'100%', 
  height:'100%', 
  objectFit:'cover',
  transition: 'opacity 0.5s ease-in-out'
}


const Carousell = ({ tipo, elementos }) => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints

    const [selectedIndex, setSelectedIndex] = useState(0);

    const cantidadSegunResponsive = isSmallScreen? 1 : 6

    const anterior = () => setSelectedIndex((selectedIndex - cantidadSegunResponsive + elementos.length) % elementos.length)
        
    const siguiente = () => setSelectedIndex((selectedIndex + cantidadSegunResponsive) % elementos.length);

    useEffect(() => {
        let interval = null;
        if (tipo === "autoplay") {
          interval = setInterval(() => {
            siguiente();
          }, 5000);
        }
        return () => clearInterval(interval);
      }, [tipo, selectedIndex]);

  
    const slicedElements = elementos?.slice(selectedIndex, selectedIndex + cantidadSegunResponsive);
        

    return (
        <Grid container direction='row' sx={{width:'80%', height:'15rem'}} justifyContent='center' alignItems='center' mt={30} 
        backgroundColor='red'
        >

        <Button onClick={anterior} size={isSmallScreen? 'small' : 'large'}><KeyboardArrowLeft/></Button>

        <Stack width={{xs:'60%', sm:'70%'}} height='100%' display='flex' flexDirection='row' alignItems='center' justifyContent='center' flexWrap='wrap' gap={{xs:'0px', sm:'0px 10px'}}>
        {slicedElements?.map( e => ( 
            <Stack key={e.codigo} display='flex' flexDirection='row' width={{xs: '100%', sm: '15%'}}  height={{xs: '100%', sm: '80%'}}>
                <img src={e.imagen} alt={e.codigo}  style={style} />
            </Stack>
        ))}
        </Stack>

            <Button onClick={siguiente} size={isSmallScreen? 'small' : 'large'}><KeyboardArrowRight /></Button>
        </Grid>
    );
 }

export default Carousell