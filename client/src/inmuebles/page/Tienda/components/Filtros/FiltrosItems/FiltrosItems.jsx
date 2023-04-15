import FiltrosPorCategoria from "./FiltrosPorCategoria"
import { Typography } from '@mui/material'



const FiltrosItems = () => {
  return (
    <form>

     <Typography>Por precio</Typography>
     <FiltrosPorCategoria />
     <Typography>Por Cantidad de habitaciones</Typography>

    </form>
  )
}

export default FiltrosItems