import { heightFooter } from "../layout/InmuebleLayout"
import { Link as LinkReact } from 'react-router-dom'
import { Grid, Icon, Typography, Link } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';




const Footer = () => {
  return (
    <Grid container paddingTop='2rem' paddingBottom='2rem' paddingLeft={{xs:'2rem', sm:'0px'}} justifyContent='center' alignSelf='end' gap={5} 
    sx={{backgroundColor:'#281D44', minHeight:`${heightFooter}rem`, height:'max-content'}} component='footer'>
      
      <Grid item xs={10} sm={5}>
        <StyledTypographyTitle>SOBRE NOSOTROS</StyledTypographyTitle>
        <Grid mt='5px' color='white'>
          <StyledTypographyLink>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi quod ipsa, laborum odit aspernatur sit 
          harum ipsam fuga iste vitae aperiam, eos maxime aut odio officiis placeat reiciendis esse!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil efgd
          </StyledTypographyLink>
        </Grid>
      </Grid>
      
      
      <Grid item xs={10} sm={2}>
        <StyledTypographyTitle>NAVEGACION</StyledTypographyTitle>
        <Grid mt='5px'>
          <Grid><Link component={LinkReact} to={'/'}><StyledTypographyLink>HOME</StyledTypographyLink></Link></Grid>
          <Grid><Link component={LinkReact} to={'/tienda'}><StyledTypographyLink>INMUEBLES</StyledTypographyLink></Link></Grid>
          <Grid><Link component={LinkReact} to={'/tienda?c=alquiler'}><StyledTypographyLink>ALQUILER</StyledTypographyLink></Link></Grid>
          <Grid><Link component={LinkReact} to={'/tienda?c=comprar'}><StyledTypographyLink>COMPRAR</StyledTypographyLink></Link></Grid>
          <Grid><Link component={LinkReact} to={'/administracion'}><StyledTypographyLink>ADMINISTRACION</StyledTypographyLink></Link></Grid>
          <Grid><Link component={LinkReact} to={'/nosotros'}><StyledTypographyLink>NOSOTROS</StyledTypographyLink></Link></Grid>
          <Grid><Link component={LinkReact} to={'/contacto'}><StyledTypographyLink>CONTACTO</StyledTypographyLink></Link></Grid>
        </Grid>
      </Grid>


      <Grid item xs={10} sm={3}>
        <StyledTypographyTitle>CONTACTO</StyledTypographyTitle>
        <Grid container direction='column' mt='5px' gap={0.5}>
          <Grid container direction='row'gap={1} alignItems='center'>
          <Icon sx={{color:"white"}}><InstagramIcon /></Icon>
          <Link href="https://www.instagram.com/emiratpropiedades" target="_blank" rel="noopener noreferrer">
            <StyledTypographyLink>emiratpropiedades</StyledTypographyLink>
          </Link>
          </Grid>

          <Grid container direction='row'gap={1} alignItems='center'>
          <Icon sx={{color:"white"}}><WhatsAppIcon /></Icon>
          <StyledTypographyLink color='white'>3512252392/3513606961</StyledTypographyLink>
          </Grid>

          <Grid container direction='row'gap={1} alignItems='center'>
          <Icon sx={{color:"white"}}><EmailIcon /></Icon>
          <StyledTypographyLink color='white'>emiratpropiedades@gmail.com</StyledTypographyLink>
          </Grid>

        </Grid>
      </Grid>

    </Grid>
  )
}

export default Footer;








const StyledTypographyLink = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: theme.typography.h4.fontFamily,
  fontWeight: 200,
  fontSize: '12px'
}));


const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: theme.typography.h2.fontFamily,
  fontWeight: 400,
  fontSize: theme.typography.h4.fontSize,
}));
