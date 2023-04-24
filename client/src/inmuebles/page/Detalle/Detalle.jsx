import { Button, Grid, Icon, Typography, useTheme } from '@mui/material'
import useInmueble from '../../Hook/useInmueble'
import { IconosItems } from '../../components'
import InmuebleLayout, { heightViews } from '../../layout/InmuebleLayout'
import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import { Maps } from './components';



const Detalle = () => {

  const navigate = useNavigate()
  
  const { inmuebleId } = useInmueble()

  const imagenSlice4 = inmuebleId?.imagen.slice(0,4)
  const theme = useTheme()  

  const onClickImagenSeleccionada = () => {
    
  }

  return (
    <InmuebleLayout>
    <Grid container width='100%' maxHeight='min-content' height={{xs:'160rem', sm:'100rem'}} direction='column' justifyContent='space-around' 
    mt={`${heightViews}rem`} pl={{xs:0, sm:10}} pr={{xs:0, sm:10}}>

      <Grid container width='100%' display='flex' flexDirection={{xs:'column',sm:'row'}} justifyContent='center' alignItems='center' gap={2} mb={2}>
        <TypographyTitulo>{inmuebleId?.nombre}</TypographyTitulo>
        <Grid display='flex' flexDirection='row' alignItems='end' >
          <Icon><CircleIcon sx={{ fontSize:'15px', color:'#2FBF01'}}/></Icon>
          <Typography variant='p'>{inmuebleId?.status}</Typography>
        </Grid>
      </Grid>

      <Grid container direction={{xs:'column', sm:'row'}} width='100%' height={{xs:'max-content', sm:'25rem'}}>
          <Grid width={{xs:'100%',sm:'40%'}} height={{xs:'50%',sm:'100%'}}>
          <img src={inmuebleId?.imagen[0]} alt={inmuebleId?.imagen[0]} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
          </Grid>

          <Grid container direction='row' width={{xs:'100%',sm:'60%'}} height={{xs:'50%',sm:'100%'}} justifyContent='center' alignItems='center'>

            <Button size='small'><KeyboardArrowLeftIcon/></Button>

            <Grid item xs={5} sm={9.5} width={{xs:'100%',sm:'80%'}} height='100%' display='flex' flexDirection={{xs:'column', sm:'none'}} 
            flexWrap={{xs:'none', sm:'wrap'}} gap={1} justifyContent='center' alignItems='center'>
            {imagenSlice4?.map( (img, value) => (
              <Grid container key={value} width='15rem' height='12rem' >
              <img src={img} alt={img}  style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </Grid>
            ))}
            </Grid>

            <Button size='small'><KeyboardArrowRightIcon/></Button>

          </Grid>
      </Grid>


      <Grid container direction='column' width='100%' mt={2} p={4} backgroundColor='white' gap={2} boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 8px -3px'> 
        <Grid item width='max-content' pl={0.5} pr={0.5} border={`2px solid ${theme.palette.primary.main}`}>
          <TypographyVenta>VENTA</TypographyVenta>
        </Grid>
        <Grid container direction='row' justifyContent='space-between' alignItems='center' borderLeft={`3px solid ${theme.palette.secondary.main}`}>
          <TypographyPrecio variant='h2' pl={2}>{inmuebleId?.precio} {inmuebleId?.moneda}</TypographyPrecio>
          <Typography variant='h4' fontWeight={500}>{inmuebleId?.direccion}</Typography>
        </Grid>
        <Grid container display='flex' flexWrap='wrap' gap={5}> 
         <IconosItems p={inmuebleId}/>
        </Grid>
      </Grid>

      <Grid container width='100%'direction='column' p={4} backgroundColor='white' boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 8px -3px' gap={3}>
        <Grid container direction='row' width='100%' justifyContent='space-between'>
          <Typography variant='p' fontWeight={200}>Código de inmueble: {inmuebleId?.id}</Typography>
          <Button variant="outlined" size="small" onClick={() => navigate(`/contacto?c=alquilar&id=${inmuebleId?.id}`)}>Contactar</Button>
        </Grid>

        <Grid>
          <Typography variant='h4'>Descripción</Typography>
          <Typography variant='p'>{inmuebleId?.descripcion}</Typography>
        </Grid>
        
        <Grid border='1px solid #dfdede'></Grid>

        <Grid container display='flex' flexWrap='wrap' gap={2}> 
         <IconosItems p={inmuebleId}/>
        </Grid>

        <Typography variant='h5'>Fecha de publicacion: {inmuebleId?.fechaPublicacion}</Typography>
      </Grid>

      <Grid container direction='column' p={2} backgroundColor='white' boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 8px -3px'>
        <Typography variant='h4' fontWeight={600}>Ubicación</Typography>
        <Typography variant='p' fontWeight={400} mt={1}>{inmuebleId?.direccion}</Typography>
        <Grid mt={2} p={2} border={`3px solid ${theme.palette.primary.main}`} >
         <Maps direccion={inmuebleId?.direccion}/>
        </Grid>
      </Grid>


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


const TypographyVenta = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.typography.p.fontFamily,
  fontSize: '20px',
  fontWeight: 400,
}));


const TypographyPrecio = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: theme.typography.h2.fontFamily,
  fontSize: '30px',
  fontWeight: 600,
}));
