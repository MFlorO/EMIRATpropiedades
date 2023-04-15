import { Grid } from "@mui/material"
import { InmuebleLayout } from "../../layout"
import { heightViews } from "../../layout/InmuebleLayout"


const Administracion = () => {
  return (
    <InmuebleLayout>
        <Grid container width='100%' mt={`${heightViews}rem`}>
            ADMINISTRACION
        </Grid>
    </InmuebleLayout>
  )
}

export default Administracion