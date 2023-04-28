import { Avatar , Button, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';





export default function SignInSide() {


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  return (
  <GridContenedor container component="main" >
    <Grid item xs={11} sm={8} md={5} component={Paper} elevation={6} square>
        <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'space-around' }}>
            <Typography variant='h4' textAlign='center' color='secondary.main'>PANEL DE ADMINISTRACIÓN</Typography>
            <TypographyTitulo>EMIRAT propiedades</TypographyTitulo>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main', marginTop: 3 }}><LockOutlinedIcon /></Avatar>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
              <TextField margin="normal" required fullWidth id="password" label="Password Address" name="password" autoComplete="current-password" />
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recordarme" />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>INGRESAR</Button>
              <Grid container><Link href="#" variant="body2">Forgot password?</Link></Grid>
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>{'Copyright © '}Florencia Oldani {new Date().getFullYear()}</Typography>
            </Box>
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


const TypographyTitulo = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: theme.typography.h1.fontFamily,
  fontSize: '40px',
  fontWeight: 600,
  textAlign:'center'
}));


