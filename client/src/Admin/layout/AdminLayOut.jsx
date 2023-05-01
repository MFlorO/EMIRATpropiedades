import { MenuMobile, SideBar } from "../components/SideBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Grid, useMediaQuery, useTheme } from '@mui/material';





export const heightNavbar = 7
export const widthSideBar = 18
export const heightSidebar = 28



const AdminLayOut = ({ children }) => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints
  
  return (
    <Grid container justifyContent="space-between" sx={{ backgroundColor: theme.palette.primary.main}}>

    <NavBar />

    { 
    !isSmallScreen 
      ? <SideBar />
      : <MenuMobile />
    }
      
    <Grid container direction='column' justifyContent='space-between' sx={{ minHeight:'100vh ', height:"max-content", width:'100%' }} 
     mt={{ xs: `5rem`, sm:`${heightNavbar}rem`}} ml={{xs:'none', sm:`${widthSideBar}rem`}} >
      <Grid >{children}</Grid>
        <Grid><Footer /></Grid>
      </Grid>
    </Grid>
  );
}

export default AdminLayOut;
