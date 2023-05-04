import { Grid, TextField, Checkbox, InputLabel, FormControlLabel, useTheme } from "@mui/material";
import styled from "@emotion/styled";


const PrimeraParteFormulario = ({formState, onInputChange}) => {

    const { nombre, direccion, descripcion, fechaPublicacion, precio, moneda, dormitorios, baños, cochera, antiguedad, m2, pileta } = formState
    
    const theme = useTheme()

    const styleSelect = {
        borderRadius: '5px',
        borderColor: "#26232E",
        width: '100%',
        height: '100%',
        color: 'black',
        padding:'0.75rem',
        backgroundColor: theme.palette.background.dark,
      }

  return (
    <>
      <TextField type='text' label="Nombre" name="nombre" value={nombre} onChange={onInputChange} color="secondary"/>
      <TextField type='text' label="Direccion" name="direccion" value={direccion} onChange={onInputChange} color="secondary"/>
      <TextField type='text' multiline  rows={4} label="Descripción" name="descripcion" value={descripcion} onChange={onInputChange} color="secondary"/>

      <InputLabel style={{ color: 'black' }}>Fecha de publicación</InputLabel>
      <TextField type='date' name="fechaPublicacion" value={fechaPublicacion} onChange={onInputChange} color="secondary"/>

      <Grid container justifyContent='center' alignItems='center' width='100%' height='max-content' gap={2}>
        
        <Grid item xs={12} sm={4} sx={{display:'flex'}}>
          <Grid container width='50%'>
          <TextField type="number" step="0.01" min="0" label="Precio" name="precio" value={precio} onChange={onInputChange} color="secondary" fullWidth/>
          </Grid>
          <Grid container width='50%'>
          <select defaultValue='USD' name='moneda' onChange={onInputChange} style={styleSelect}>
          <option name='moneda' value='USD'>USD</option> 
          <option name='moneda' value='ARG'>ARG</option> 
          </select>
          </Grid>
        </Grid>
       
        <Grid item xs={12} sm={3}><TextField type='number' label="Cantidad de dormitorios" name="dormitorios" value={dormitorios} onChange={onInputChange} color="secondary" /></Grid>
        <Grid item xs={12} sm={3}><TextField type='number' label="Cantidad de baños" name="baños" value={baños} onChange={onInputChange} color="secondary"/></Grid>
        <Grid item xs={12} sm={3}><TextField type='number' label="Cochera" name="cochera" value={cochera} onChange={onInputChange} color="secondary"/></Grid>
        <Grid item xs={12} sm={3}><TextField type='number' label="Antiguedad" name="antiguedad" value={antiguedad} onChange={onInputChange} color="secondary"/></Grid>
        <Grid item xs={12} sm={3}><TextField type='number' label="M2" name="m2" value={m2} onChange={onInputChange} color="secondary"/></Grid>
        <FormControlLabelStyle type='number' label="Pileta"  control={<Checkbox name="pileta" value={pileta} onChange={onInputChange} color="secondary" />} color="secondary"/>
      </Grid>

    </>
  )
}

export default PrimeraParteFormulario;


const FormControlLabelStyle = styled(FormControlLabel)(({ theme }) => ({
  color: theme.palette.secondary.main,
  border: theme.palette.secondary.main,
}));
