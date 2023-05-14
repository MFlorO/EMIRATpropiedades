import { Grid, Typography, FormControlLabel, Checkbox, useTheme, InputLabel} from "@mui/material";
import styled from "@emotion/styled";


const CategoriasForm = ({ onInputChange }) => {
  const theme = useTheme()
  const styleSelect = {
    borderRadius:'10px',
    padding:'0.5rem',
    backgroundColor: `${theme.palette.background.dark}`,
    '&:hover': {
      backgroundColor: "red",
    },
    '&:focus': {
      backgroundColor: "red",
      borderColor: `${theme.palette.secondary.main}`
    },
    '& option:hover': {
      backgroundColor: "red",
    },
  }

  return (
 <Grid container height='max-content' gap={2}>
    <Grid item xs={12}>
      <select defaultValue='default' onChange={onInputChange} name="idCategoria" style={styleSelect}>
        <option value='default' disabled>CATEGORIA</option> 
        <option value={1}>ALQUILER</option> 
        <option value={2}>VENTA</option> 
      </select>
    </Grid>
    <Grid container alignItems='center' gap={2}>
      <InputLabel>Destacado:</InputLabel>
      <FormControlLabelStyle control={<Checkbox name="destacado" value={true} onChange={onInputChange} color="secondary" />} />
    </Grid>
 </Grid> 
)
}
export default CategoriasForm;



const FormControlLabelStyle = styled(FormControlLabel)(({ theme }) => ({
    color: theme.palette.secondary.main,
    border: theme.palette.secondary.main,
}));
  
  