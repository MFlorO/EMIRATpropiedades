import { useDispatch, useSelector } from "react-redux";
import { setPaginaActual } from "~/redux/actions/inmuebles";
import { Loading } from "../../../components";
import { useInmuebles, useQueryParams } from "../../../Hook";
import { useNavigate } from "react-router-dom";
import { Grid, Pagination, useTheme } from "@mui/material"




const Paginado = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const theme = useTheme();
  const { c, s, items} = useQueryParams()
  const { cantidadPaginas } = useInmuebles()
  const { paginaActual } = useSelector( state => state.inmueble )

  const handleChange = (event, value) => {

    (c !== undefined && c !== 'todos') 
    ? (s !== undefined ) 
           ? navigate(`/tienda?c=${c}&s=${s}&paginaActual=${value}&items=${items}`) 
           : navigate(`/tienda?c=${c}&paginaActual=${value}&items=${items}`)
    : (s !== undefined ) 
           ? navigate(`/tienda?s=${s}&paginaActual=${value}&items=${items}`)
           : navigate(`/tienda?paginaActual=${value}&items=${items}`) 

    dispatch(setPaginaActual(value))
  }

  return (
    <Grid item xs={10} sm={5} >
      <Pagination count={cantidadPaginas} variant="outlined" onChange={handleChange} defaultPage={1} page={paginaActual}
      sx={{
        "& .MuiPaginationItem-root": {
          color: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
        "& .Mui-selected": {
          borderColor: theme.palette.secondary.main,
          backgroundColor: theme.palette.secondary.main,
        },
      }}
      />
    </Grid>
  ) 
}

export default Paginado