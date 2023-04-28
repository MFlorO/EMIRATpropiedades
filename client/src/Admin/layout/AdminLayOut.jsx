import { SideBar } from "../components/SideBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Grid } from '@mui/material';





export const heightNavbar = 7
export const widthSideBar = 18
export const heightSidebar = 28



const AdminLayOut = ({ children }) => {
  
  return (
    <Grid container justifyContent="space-between" 
    sx={{ backgroundColor: '#ffffff', backgroundImage: `linear-gradient(180deg, #ffffff 0%, #f5f5f5 11%, #ebeaea 30%, #281d44 71%, #281d44 100%)` }}
    >

      <SideBar />

      <NavBar />

      
      <Grid container direction='column' justifyContent='space-between' sx={{ minHeight:'100vh ', height:"max-content", width:'100%' }}
      mt={{ xs: `${heightNavbar + heightSidebar + 2 }rem`, sm:`${heightNavbar}rem`}} ml={{xs:'none', sm:`${widthSideBar}rem`}} >
        <Grid >{children}</Grid>
        <Grid><Footer /></Grid>
      </Grid>

    </Grid>
  );
}

export default AdminLayOut;
