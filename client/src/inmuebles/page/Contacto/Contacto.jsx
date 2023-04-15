import InmuebleLayout, { heightViews } from "../../layout/InmuebleLayout"
import FormContact from "./components/FormContact"
import { Grid } from "@mui/material"


const Contacto = () => {
  return (
    <InmuebleLayout>
      <Grid container width='100%' mt={`${heightViews}rem`} height={{xs:'55rem',sm:'max-content'}}>

      <Grid item xs={12} sm={6} order={{xs:1, sm:0}} height='max-content'>
        <FormContact />
      </Grid>

      <Grid item xs={12} sm={6} order={{xs:0, sm:1}} height={{xs:'15rem', sm:'35rem'}} width='100%' 
      sx={{backgroundImage: 'url(/img/banner/bannerLanding.png)', backgroundSize:'cover', backgroundPosition:'center'}}></Grid>
      
      </Grid>
    </InmuebleLayout>
  )
}

export default Contacto