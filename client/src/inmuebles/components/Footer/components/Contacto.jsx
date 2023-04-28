import { Grid, Icon, Typography, Link } from "@mui/material"
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';


const Contacto = () => {
  return (
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
  )
}

export default Contacto;



const StyledTypographyLink = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: theme.typography.h4.fontFamily,
  fontWeight: 200,
  fontSize: '12px'
}));