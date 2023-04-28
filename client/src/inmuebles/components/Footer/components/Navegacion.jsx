import { Link as LinkReact } from 'react-router-dom'
import { Grid, Link, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';



const Navegacion = () => {
  return (
<Grid mt='5px'>
  <Grid><Link component={LinkReact} to={'/'}><StyledTypographyLink>HOME</StyledTypographyLink></Link></Grid>
  <Grid><Link component={LinkReact} to={'/tienda'}><StyledTypographyLink>INMUEBLES</StyledTypographyLink></Link></Grid>
  <Grid><Link component={LinkReact} to={'/tienda?c=alquiler'}><StyledTypographyLink>ALQUILER</StyledTypographyLink></Link></Grid>
  <Grid><Link component={LinkReact} to={'/tienda?c=comprar'}><StyledTypographyLink>COMPRAR</StyledTypographyLink></Link></Grid>
  <Grid><Link component={LinkReact} to={'/administracion'}><StyledTypographyLink>ADMINISTRACION</StyledTypographyLink></Link></Grid>
  <Grid><Link component={LinkReact} to={'/nosotros'}><StyledTypographyLink>NOSOTROS</StyledTypographyLink></Link></Grid>
  <Grid><Link component={LinkReact} to={'/contacto'}><StyledTypographyLink>CONTACTO</StyledTypographyLink></Link></Grid>
</Grid>
  )
}

export default Navegacion;



const StyledTypographyLink = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: theme.typography.h4.fontFamily,
  fontWeight: 200,
  fontSize: '12px'
}));