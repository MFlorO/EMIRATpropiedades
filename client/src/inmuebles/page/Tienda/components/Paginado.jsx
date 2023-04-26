import { useDispatch } from "react-redux";
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

  if (!cantidadPaginas) return <Loading />; 

  const handleChange = (event, value) => {
    navigate( s !== undefined ? `/tienda?c=${c}&s=${s}&paginaActual=${value}&items=${items}` : `/tienda?c=${c}&paginaActual=${value}&items=${items}`)
    dispatch(setPaginaActual(value))
  }

  return (
    <Grid item xs={10} sm={5} >
      <Pagination count={cantidadPaginas} variant="outlined" onChange={handleChange} defaultPage={1}
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