import { SobreNosotros, Navegacion, Contacto} from "./components";
import { heightFooter } from "../../layout/InmuebleLayout"
import { Grid, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';




const Footer = () => {
  return (
    <Grid container paddingTop='2rem' paddingBottom='2rem' paddingLeft={{xs:'2rem', sm:'0px'}} justifyContent='center' alignSelf='end' gap={5} 
    sx={{backgroundColor:'#281D44', minHeight:`${heightFooter}rem`, height:'max-content'}} component='footer'>
      
      <Grid item xs={10} sm={5}>
        <StyledTypographyTitle>SOBRE NOSOTROS</StyledTypographyTitle>
        <SobreNosotros />
      </Grid>
      
      
      <Grid item xs={10} sm={2}>
        <StyledTypographyTitle>NAVEGACION</StyledTypographyTitle>
        <Navegacion />
      </Grid>


      <Grid item xs={10} sm={3}>
        <StyledTypographyTitle>CONTACTO</StyledTypographyTitle>
        <Contacto />
      </Grid>
      <Grid alignSelf='end' paddingRight={{xs:'3rem', sm:'0px'}}><Typography variant='p' color='white' textAlign='center' fontWeight={200} >Copyright © Florencia Oldani {new Date().getFullYear()}</Typography></Grid>
    </Grid>
  )
}

export default Footer;



const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: theme.typography.h2.fontFamily,
  fontWeight: 400,
  fontSize: theme.typography.h4.fontSize,
}));
