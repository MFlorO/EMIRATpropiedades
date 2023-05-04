import { Grid, Typography, FormControlLabel, Checkbox, } from "@mui/material";
import styled from "@emotion/styled";


const SegundaParteFormulario = ({ idCategoria, destacado ,onInputChange}) => {
  return (
 <Grid container height='max-content' mt={3}>
    <Typography variant='h4' color='black'>Categorías:</Typography>
    <Grid container >
      <FormControlLabelStyle label="Alquiler"  control={<Checkbox name="idCategoria" value={idCategoria} onChange={onInputChange} color="secondary" />} />
      <FormControlLabelStyle label="Venta"  control={<Checkbox name="idCategoria" value={idCategoria} onChange={onInputChange} color="secondary" />} />
      <FormControlLabelStyle label="Destacado"  control={<Checkbox name="destacado" value={destacado} onChange={onInputChange} color="secondary" />} />
    </Grid>
 </Grid> 
  )
}

export default SegundaParteFormulario;

const FormControlLabelStyle = styled(FormControlLabel)(({ theme }) => ({
    color: theme.palette.secondary.main,
    border: theme.palette.secondary.main,
  }));
  
  