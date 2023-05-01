import { useLocation, useNavigate } from 'react-router-dom';
import { heightNavbar, widthSideBar } from '../layout/AdminLayOut';
import { Container, IconButton, Grid, useTheme, Typography, useMediaQuery } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';




const NavBar = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints
  const navigate = useNavigate()

  const { pathname } = useLocation()
  const pathnameSlice = pathname.charAt(17).toUpperCase()
  const nuevoPathname = pathnameSlice + pathname.slice(18)

  return (
    <Container sx={{position: 'absolute', width: '90vw', height: `${heightNavbar}rem`}}>
    <Grid container ml={{xs:'0', sm:`${widthSideBar + 1}rem`}} alignItems='center' justifyContent={{xs:'center', sm:'space-between'}} mt={!isSmallScreen ? '1rem' : '3rem'}>
          
     <Grid flexDirection='row' alignItems='center'>
      <IconButton onClick={() => navigate(`/dashboard/admin`)} color='secondary'><HomeIcon /></IconButton>
      <Typography variant='p' color={theme.palette.text.main}>/ {pathnameSlice === '' ? 'Dashboard' : nuevoPathname}</Typography>
    </Grid>

    </Grid>
  </Container>
  );
};

export default NavBar;
