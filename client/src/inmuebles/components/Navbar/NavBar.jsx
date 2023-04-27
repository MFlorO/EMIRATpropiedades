import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";
import { heightNavbar } from "../../layout/InmuebleLayout";
import logo from "/img/logo.png"
import { Link as LinkMUI, useLocation } from 'react-router-dom'
import { Grid, Link } from "@mui/material";




const NavBar = () => {

  const { pathname } = useLocation()

  const pathnameNO = ["/", "/tienda", "/tienda/desc", "/tienda/asc"]
  const pathname2 = pathnameNO.includes(pathname)


  const menuStyles = {
    position: 'absolute',
    top: 0,
    backgroundColor: `${pathname2 === false ? '#FFF' :'none' }`,
    boxShadow: `${pathname2 === false ? 'rgba(50, 50, 93, 0.25) 0px 2px 8px -3px' :'none' }`,  
    zIndex: 100
  };


  return (
   <Grid container sx={{ width: '100%', minHeight:`${heightNavbar}rem`, height:'max-content'}} justifyContent='center' alignItems='center' 
    component='header' style={menuStyles} pl={4} pr={4} pt={2} pb={2}
   >
    <Grid item xs={4} sm={1.5} width={{xs:'0rem', sm:'1rem'}} height='0%'> 
      <Link component={LinkMUI} to={'/'}><img src={logo} alt={logo} style={{width:'100%', height:'100%', objectFit:'cover'}}/></Link>
    </Grid>

    {/* Menu para Desktop */}
    <Grid item sm={10} height='0%' display={{xs:'none', sm:'flex'}}  component='nav'>
      <MenuDesktop />
    </Grid>
      
    {/* Menu para movile */}
    <Grid item xs={8} justifyContent='end' display={{xs:'flex', sm:'none'}} component='nav'>
      <MenuMobile />
    </Grid>

   </Grid>
  );
};

export default NavBar;