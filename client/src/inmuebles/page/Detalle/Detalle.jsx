import { Grid, Typography } from '@mui/material'
import useInmueble from '../../Hook/useInmueble'
import { IconosItems } from '../../components'



const Detalle = () => {

  const { inmuebleId } = useInmueble()

  console.log(inmuebleId)


  return (
    <Grid>

      <Grid>
        <Typography>{inmuebleId?.nombre}</Typography>
        <Typography>{inmuebleId?.status}</Typography>
      </Grid>

      <Grid>
        <img src={inmuebleId?.imagen} alt={inmuebleId?.id}  style={{width:'100%', height:'100%', objectFit:'cover'}}/>
      </Grid>

      <Grid>
        <Typography>{inmuebleId?.precio}</Typography>
        <Typography>{inmuebleId?.direccion}</Typography>
        <IconosItems p={inmuebleId}/>
      </Grid>

      <Grid>
        <Typography>Código de Inmueble{inmuebleId?.id}</Typography>
        <Typography>{inmuebleId?.descripcion}</Typography>
        <IconosItems p={inmuebleId}/>
        <Typography>{inmuebleId?.fechaPublicacion}</Typography>
      </Grid>

      <Grid>
        ACA VA EL MAPA
      </Grid>

    </Grid>
  )
}

export default Detalle