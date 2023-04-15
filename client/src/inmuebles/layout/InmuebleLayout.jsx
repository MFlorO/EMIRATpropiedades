import { Grid } from "@mui/material"
import { Footer, NavBar } from "../components";



export const heightNavbar = 4
export const heightFooter = 6
export const heightViews = heightNavbar + 5


const InmuebleLayout = ({children}) => {
   
 return (
  <Grid container sx={{minHeight:'100vh', height:'max-content', maxWidth:'100vw', width:'100%'}}>
    <NavBar />

    <Grid container paddingLeft={{xs:1.5, sm:10}} paddingRight={{xs:1.5, sm:10}} justifyContent="space-around" alignItems='center' 
    sx={{height:'max-content', width:'100%'}} pb='5rem' backgroundColor='#F8F8F8'
    >
      {children}
    </Grid>

    <Footer /> 
  </Grid>  
 )
}

export default InmuebleLayout;