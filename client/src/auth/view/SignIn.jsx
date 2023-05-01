import { Paper, Box, Grid, Typography, useTheme, useMediaQuery} from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from "/img/logo/logoSignIn.png"
import FormSignIn from '../components/FormSignIn';




export default function SignInSide() {

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints

  return (
  <GridContenedor container component="main">
    <GridForm container component={Paper} width={ isSmallScreen ? 'min-content' : '40vw'}>
      <Box sx={{ my: 3, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'space-around' }}>
          <img src={logo} alt='logo' style={{width:'10rem', height:'10rem'}}/>
          <Typography variant='h4' textAlign='center' color='secondary.main' mt={2}>PANEL DE ADMINISTRACIÓN</Typography>
          <FormSignIn />
      </Box>
    </GridForm>
  </GridContenedor>
  );
}



const GridContenedor = styled(Grid)(({ theme }) => ({
  height:'100vh',
  backgroundColor: theme.palette.primary.main,
  alignItems:'center',
  justifyContent:'center'
}));



const GridForm = styled(Grid)(({ theme }) => ({
  height:'max-content',
  backgroundColor: theme.palette.background.dark,
  boxShadow: 'rgba(0, 0, 0, 0.275) 2px 2px 6px',
  alignItems:'center',
  justifyContent:'center'
}));
