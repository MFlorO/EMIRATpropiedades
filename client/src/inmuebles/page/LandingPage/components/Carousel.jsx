import { useState } from 'react';
import { Grid, Button, useTheme, useMediaQuery, Typography } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/material/styles';


const style = {
  width:'100%', 
  height:'60%', 
  objectFit:'cover',
  objectPosition: 'center center',
}



const elementos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCukprG1CL0fwu5f1XI1OKggmoiHsb48R2gw&usqp=CAU", //1
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCukprG1CL0fwu5f1XI1OKggmoiHsb48R2gw&usqp=CAU", //2
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCukprG1CL0fwu5f1XI1OKggmoiHsb48R2gw&usqp=CAU", //3
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMLRmTKnrOLmTDNv1tbZvWpj0LnqSj5fazA&usqp=CAU", //4
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMLRmTKnrOLmTDNv1tbZvWpj0LnqSj5fazA&usqp=CAU", //5
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCukprG1CL0fwu5f1XI1OKggmoiHsb48R2gw&usqp=CAU", //6
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCukprG1CL0fwu5f1XI1OKggmoiHsb48R2gw&usqp=CAU", //7
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCukprG1CL0fwu5f1XI1OKggmoiHsb48R2gw&usqp=CAU", //8
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCukprG1CL0fwu5f1XI1OKggmoiHsb48R2gw&usqp=CAU" //9
  ]



const Carousell = () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 

    const [selectedIndex, setSelectedIndex] = useState(0);

    const cantidadSegunResponsive = isSmallScreen? 1 : 3

    const anterior = () => setSelectedIndex((selectedIndex - cantidadSegunResponsive + elementos.length) % elementos.length)
    const siguiente = () => setSelectedIndex((selectedIndex + cantidadSegunResponsive) % elementos.length);
    const slicedElements = elementos?.slice(selectedIndex, selectedIndex + cantidadSegunResponsive);


    return (
      <Grid container direction='column' sx={{width:'100%', height:'30rem', maxHeight:'max-content'}} justifyContent='center' alignItems='center' mb={4}>
      <Grid container direction='column' justifyContent='center' alignItems='center' mb={4}>
       <Typography variant="h3" fontSize='28px' fontWeight={400}>Inmuebles Destacados</Typography>
      </Grid>

      <Grid container width='100%' height='25rem' justifyContent='center' alignItems='center'>

        <Button onClick={anterior} size='small'><KeyboardArrowLeft/></Button>

        <Grid container width={{xs:'60%', sm:'90%'}} height='100%' direction='row' alignItems='center' justifyContent='space-around'>
        {slicedElements?.map( (e, index) => ( 
            <Grid item key={index} width={{xs:'100%', sm:'30%'}} height='100%' backgroundColor='white'>
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
