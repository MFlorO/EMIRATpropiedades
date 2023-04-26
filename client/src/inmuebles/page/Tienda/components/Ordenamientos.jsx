import { useNavigate } from "react-router-dom";
import useQueryParams from "../../../Hook/useQueryParams";
import { Grid, Typography } from "@mui/material";


const styleSelect = {
  borderRadius:'10px',
  padding:'0.75rem',
  borderColor: '#281D44',
  backgroundColor: 'white'
}



const Ordenamientos = () => {
  
  const navigate = useNavigate()
  const { c, s="", items, } = useQueryParams()

  const handleOrdenChange = (event) => {
    event.preventDefault()
    navigate(`/tienda/${event.target.value}/?c=${c}&s=${s}&paginaActual=1=0&items=${items}`)
  }

  return (

    <Grid item sm={7} alignItems='center'>
      <Typography variant='p' color='#868686+' pr={1}>Ordenar Por:</Typography>
      <select defaultValue={'default'} onChange={handleOrdenChange} style={styleSelect}>
        <option value={'default'}>PRECIO</option> {/* Original */}
        <option value={'des'}>Mayor precio</option> {/* Descendiente */}
        <option value={'asc'}>Menor precio</option> {/* Ascendiente */}
      </select>
    </Grid>
  );
};

export default Ordenamientos;
