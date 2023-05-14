import { useDispatch } from "react-redux"
import { useQueryParams } from "../../../../../Hook"
import { resetFiltro } from "~/redux/actions"
import FiltrosPorCategoria from "./FiltrosPorCategoria"
import FiltrosPorHabitaciones from "./FiltrosPorHabitaciones"
import { Button, Grid } from '@mui/material'


const FiltrosItems = () => {

  const { c } = useQueryParams()

  const dispatch = useDispatch()

  return (
    <>

    <Grid container gap={2}>

     { (c !== 'alquiler' && c !=='venta') && <FiltrosPorCategoria />}

     <FiltrosPorHabitaciones />

    </Grid>
    <Button variant='outlined' onClick={() => dispatch(resetFiltro())} size="small">BORRAR FILTROS</Button>
    </>
  )
}

export default FiltrosItems;


