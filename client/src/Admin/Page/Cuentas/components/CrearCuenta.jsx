import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AdminLayOut } from "~/Admin/layout"
import { useForm } from "../../../Hook/useForm";
import { startCreatingUserWithEmailPassword } from "~/redux/actions/auth";
import { validacionFormulario } from "../../../../auth/functions/validacionFormulario";
import { Container, Paper, Button, TextField, Typography, Stack, Alert } from "@mui/material";




let formData = {
  displayName: '',
  email: '',
  password: '',
}




const CrearCuenta = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [alert, setalert] = useState(false)

  const { displayName, email, password, onInputChange, errorFormValid, onResetForm, formValid, formState } = useForm(formData, validacionFormulario)
  const { errorMessage } = useSelector( state => state.auth )

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startCreatingUserWithEmailPassword({email, password, displayName}));
    if (!formValid) return;
    onResetForm();
    setalert(true)
  }


  return (
    <AdminLayOut>
    <Container maxWidth="sm">
  
    <Stack>
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column"}}>

      <Typography variant='h4' textAlign='center' mb='1rem'>CREAR CUENTA</Typography>
       
      <form style={{ p: 2, display: "flex", flexDirection: "column", justifyContent:'center',  gap:'1rem'}} onSubmit={onSubmit}>

      <TextField label="Nombre Completo" name="displayName" value={displayName} onChange={onInputChange} error={formValid()} helperText={errorFormValid.displayName} />
        
        <TextField label="Email" name="email" value={email} onChange={onInputChange} error={formValid()} helperText={errorFormValid.email} />

        <TextField label="Password" name="password" type="password" value={password} onChange={onInputChange} error={formValid()} helperText={errorFormValid.password} />
        

        { Object.values(errorFormValid).length 
          ?<Alert severity="error">Error en el formulario, compruebe que todos los campos esten llenos</Alert>
          : null
        }
        <Button variant="contained" type="submit" disabled={formValid()}>CREAR</Button>
        { alert &&  <Alert severity={errorMessage === 'Usuario creado con exito' ? "success" : "error"}>{errorMessage}</Alert> }

      </form>

    </Paper>
    </Stack> 
   
    </Container>
    </AdminLayOut>
  )
}

export default CrearCuenta