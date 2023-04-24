import { Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { ordenarPor } from "~/redux/actions";


const styleSelect = {
  borderRadius:'10px',
  padding:'0.75rem',
  borderColor: '#281D44',
  backgroundColor: 'white'
}



const Ordenamientos = () => {
  
  const dispatch = useDispatch()

  const handleOrdenChange = (event) => {
    event.preventDefault()
    dispatch(ordenarPor(event.target.value))
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
