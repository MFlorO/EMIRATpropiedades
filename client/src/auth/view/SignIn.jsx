import { Paper, Box, Grid, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from "/img/logo/logoSignIn.png"
import FormSignIn from '../components/FormSignIn';





export default function SignInSide() {
  return (
  <GridContenedor container component="main" >
    <Grid item xs={11} sm={8} md={5} component={Paper} elevation={6} square>
      <Box sx={{ my: 3, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'space-around' }}>
          <img src={logo} alt='logo' style={{width:'10rem', height:'10rem'}}/>
          <Typography variant='h4' textAlign='center' color='primary.main' mt={2}>PANEL DE ADMINISTRACIÓN</Typography>
          <FormSignIn />
      </Box>
    </Grid>
  </GridContenedor>
  );
}



const GridContenedor = styled(Grid)(({ theme }) => ({
  height:'100vh',
  backgroundColor: theme.palette.primary.main,
  alignItems:'center',
  justifyContent:'center'
}));


