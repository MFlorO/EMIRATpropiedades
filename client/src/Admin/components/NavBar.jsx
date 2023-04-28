import { useLocation, useNavigate } from 'react-router-dom';
import { heightNavbar, widthSideBar } from '../layout/AdminLayOut';

import { Container, IconButton, Grid, useTheme } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';





const NavBar = () => {

  const theme = useTheme();
  const navigate = useNavigate()

  const { pathname } = useLocation()
  const pathnameSlice = pathname.charAt(17).toUpperCase()
  const nuevoPathname = pathnameSlice + pathname.slice(18)
  const color = theme.palette.primary.main


  return (
    <Container sx={{position: 'absolute', width: '90vw', height: `${heightNavbar}rem`, mt:'1rem'}} >
    <Grid container ml={{xs:'0', sm:`${widthSideBar + 1}rem`}} alignItems='center' justifyContent={{xs:'center', sm:'space-between'}} >
          
     <Grid flexDirection='row' alignItems='center'>
      <IconButton onClick={() => navigate(`/dashboard/admin`)} sx={{color: color}}><HomeIcon /></IconButton>/ {pathnameSlice === '' ? 'Dashboard' : nuevoPathname}
    </Grid>

    </Grid>
  </Container>
  );
};

export default NavBar;
