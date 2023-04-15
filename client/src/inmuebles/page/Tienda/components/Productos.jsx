import { Grid, Typography } from "@mui/material"
import { Fragment } from "react";
import useInmuebles from "../../../Hook/useInmuebles";



const Productos = () => {

  const { inmueblesCopia } = useInmuebles()

  // const cantidadInmuebles = InmueblesCopia?.length
  
  return (
    <Grid backgroundColor='white'>

    {/* <Typography variant="h4"> {cantidadInmuebles} inmuebles</Typography> */}
      
      <Grid height='15rem'>
        
      { inmueblesCopia.inmueble?.map( p => (
        <Fragment  key={p.codigo}>
          {p.nombre}
        </Fragment>
      ))}

      </Grid>

    </Grid>
  )
}

export default Productos