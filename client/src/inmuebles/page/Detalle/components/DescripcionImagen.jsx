import { IconosItems } from "../../../components"
import Maps from "./Maps"
import { Button, Grid, Icon, Typography, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles';


const DescripcionImagen = ({ inmuebleId }) => {

    const theme = useTheme()  


  return (
    <>
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
    </>
  )
}

export default DescripcionImagen;




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
  