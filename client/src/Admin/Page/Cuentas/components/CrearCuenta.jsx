import { useNavigate, Link as LinkRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AdminLayOut } from "~/Admin/layout"
import { useForm } from "../../../Hook/useForm";
import { startCreatingUserWithEmailPassword } from "~/redux/actions/auth";
import { validacionFormulario } from "../../../../auth/functions/validacionFormulario";
import { Paper, Button, TextField, Typography, Grid, Alert, useTheme, FormHelperText, Link } from "@mui/material";
import { useState } from "react";




let formData = {
  displayName: '',
  email: '',
  password: '',
}




const CrearCuenta = () => {

  const theme = useTheme()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { displayName, email, password, onInputChange, errorFormValid, onResetForm, formValid } = useForm(formData, validacionFormulario)

  const { errorMessage } = useSelector( state => state.auth )
  const [alert, setalert] = useState(false)


  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startCreatingUserWithEmailPassword({email, password, displayName}));
    // if (!formValid) return;
    onResetForm();
    
    setalert(true)
    
    setTimeout(() => {
    setalert(false)
    }, 2000)
  }


  return (
  <AdminLayOut>
  <Grid width='100wv' align='center'>
  
    <Grid width={{xs:'90%', sm:'50%'}}>
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column", backgroundColor: theme.palette.background.dark }}>

      <Link component={LinkRouter} to='/dashboard/admin/cuentas/' textAlign='start' sx={{color: theme.palette.text.main, fontSize:'12px', textDecoration:'underline'}}>Volver a Cuentas</Link>

      <Typography variant='h4' textAlign='center' mb='1rem' color='secondary'>CREAR CUENTA</Typography>
       
      <form style={{ p: 2, display: "flex", flexDirection: "column", justifyContent:'center',  gap:'1rem'}} onSubmit={onSubmit}>

      <TextField label="Nombre Completo" name="displayName" value={displayName} onChange={onInputChange} color="secondary"/>
      {errorFormValid.displayName && <FormHelperText error>{errorFormValid.displayName}</FormHelperText>}
      
      <TextField label="Email" name="email" value={email} onChange={onInputChange} color="secondary"/>
      {errorFormValid.email && <FormHelperText error>{errorFormValid.email}</FormHelperText>}

      <TextField label="Password" name="password" type="password" value={password} onChange={onInputChange} color="secondary"/>
      {errorFormValid.password && <FormHelperText error>{errorFormValid.password}</FormHelperText>}

      <Button variant="contained" type="submit" disabled={formValid()} color="secondary">CREAR</Button>
      { alert && <Alert severity="error">{errorMessage}</Alert> } 

      </form>

    </Paper>
    </Grid> 
   
  </Grid>
  </AdminLayOut>
  )
}

export default CrearCuenta;


