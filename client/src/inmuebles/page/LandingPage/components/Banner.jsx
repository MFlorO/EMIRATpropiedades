import { Button, Grid, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";





const Banner = () => {

  const navigate = useNavigate()

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints
  
  return (
    <Grid container sx={{ backgroundImage: 'url(/img/banner/bannerLanding.png)', backgroundSize:'cover', backgroundPosition:'center' }} 
    height={{xs:'30rem', sm:'40rem'}} width='100%'>

    <Grid container sx={{ backgroundColor:'rgba(30, 30, 30, 0.5)', width:'100%', height:'100%' }}>
      <Grid container direction='column' alignItems='center' justifyContent='center' gap={1}>
        <TypographyLink sx={{ fontSize: isSmallScreen ? '35px' : '50px'}}>Hacemos realidad tu sueño</TypographyLink>
        <Typography2Link sx={{ fontSize: isSmallScreen ? '18px' : '28px'}}>Contactanos para más información</Typography2Link>
        <ButtonStyle variant="outlined" size={isSmallScreen ? 'medium' : 'large'} onClick={() => navigate('/contacto')}>Contactanos</ButtonStyle>
      </Grid>
    </Grid>

    </Grid>
  )
}
export default Banner;







const TypographyLink = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: 600,
  textAlign:'center'
}));


const Typography2Link = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: 300,
  textAlign:'center'
}));


const ButtonStyle = styled(Button)(({ theme }) => ({
  textDecoration: 'none',
  cursor: 'pointer',
  color: 'white',
  fontFamily: theme.typography.h1.fontFamily,
  border: '2px solid white',
  '&:hover': {
    backgroundColor: '#eae6e67e',
    border: '2px solid white',
  },
}));