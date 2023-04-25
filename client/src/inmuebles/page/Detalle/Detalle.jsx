import { Button, Grid, Icon, Typography, useTheme } from '@mui/material'
import useInmueble from '../../Hook/useInmueble'
import InmuebleLayout, { heightViews } from '../../layout/InmuebleLayout'
import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from 'react-router-dom';
import { Carousel, DescripcionImagen } from './components';
import { useState } from 'react';



const Detalle = () => {

  const navigate = useNavigate()
  const { inmuebleId } = useInmueble()

  const [imagenSeleccionada, setimagenSeleccionada] = useState("")

  const onClickImagenSeleccionada = (event, e) => {
    // console.log(event.target.value)
    // console.log(e)
  }


  return (
    <InmuebleLayout>
    <Grid container width='100%' maxHeight='max-content' height={{xs:'160rem', sm:'max-content'}} direction='column' justifyContent='space-around' 
    mt={`${heightViews}rem`} pl={{xs:0, sm:10}} pr={{xs:0, sm:10}} gap={{xs:1, sm:4}}>

      <Grid container width='100%' display='flex' flexDirection={{xs:'column',sm:'row'}} justifyContent='center' alignItems='center' gap={2} mb={2}>
        <TypographyTitulo>{inmuebleId?.nombre}</TypographyTitulo>
        <Grid display='flex' flexDirection='row' alignItems='end' >
          <Icon><CircleIcon sx={{ fontSize:'15px', color: inmuebleId?.status === 'Disponible' ? '#2FBF01' : '#bf5001'}}/></Icon>
          <Typography variant='p'>{inmuebleId?.status}</Typography>
        </Grid>
      </Grid>

      <Grid container direction={{xs:'column', sm:'row'}} width='100%' height={{xs:'max-content', sm:'30rem'}} justifyContent='center'>
          <Grid width={{xs:'100%',sm:'50%'}} height={{xs:'50%',sm:'70%'}}>
             <img src={inmuebleId?.imagen[0]} alt={inmuebleId?.imagen[0]} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
          </Grid>

          <Grid container direction='row' width='100%' height={{xs:'50%',sm:'25%'}} justifyContent='center' alignItems='center'>
            <Carousel imagen={inmuebleId?.imagen} cantidadImagDesktop={5} onClickImagenSeleccionada={onClickImagenSeleccionada} />
          </Grid>
      </Grid>

      <DescripcionImagen inmuebleId={inmuebleId}/>


      <Button variant="contained" size="large" onClick={() => navigate(`/contacto?c=alquilar&id=${inmuebleId?.id}`)}>Contactar</Button>


    </Grid>
    </InmuebleLayout>
  )
}

export default Detalle




const TypographyTitulo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.typography.h1.fontFamily,
  fontSize: '40px',
  fontWeight: 600,
}));

