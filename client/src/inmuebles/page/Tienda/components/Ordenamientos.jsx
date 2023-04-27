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
    
    if(c !== undefined && c !== 'todos'){
      if(s !== undefined && s !== "" ){
        navigate(`/tienda/${event.target.value}?c=${c}&s=${s}&paginaActual=1&items=${items}`) 
      }else{
        navigate(`/tienda/${event.target.value}?c=${c}&paginaActual=1&items=${items}`)
      }
    }else{
      if(s !== undefined && s !== "" ){
        navigate(`/tienda/${event.target.value}?s=${s}&paginaActual=1&items=${items}`) 
      }else{
        navigate(`/tienda/${event.target.value}?paginaActual=1&items=${items}`)
      }
    }
    
  }

  return (

    <Grid item sm={7} alignItems='center'>
      <Typography variant='p' color='#868686+' pr={1}>Ordenar Por:</Typography>
      <select defaultValue={'default'} onChange={handleOrdenChange} style={styleSelect}>
        <option value={'default'}>PRECIO</option> {/* Original */}
        <option value={'desc'}>Mayor precio</option> {/* Descendiente */}
        <option value={'asc'}>Menor precio</option> {/* Ascendiente */}
      </select>
    </Grid>
  );
};

export default Ordenamientos;
