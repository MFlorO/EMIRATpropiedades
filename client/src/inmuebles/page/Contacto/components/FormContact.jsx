import { useRef, useState } from "react";
import { useForm, useQueryParams } from "../../../Hook"
import { validacionFormulario } from "../../../functions/validacionFormulario"
import emailjs from "@emailjs/browser";
import { Alert, Button, FormHelperText, Grid, TextField, Typography } from "@mui/material"
import { serviceId, templateId, userId } from "~/env";


let formData = {
    user_name: '',
    user_email: '',
    phone: '',
    message: ''
  }



const FormContact = () => {

  const query = useQueryParams()

  const form = useRef();

  const [alertSucces, setAlertSucces] = useState(true);
  const [alertError, setAlertError] = useState(true);

  const { user_name, user_email, phone, message , onInputChange, errorFormValid, formValid, onResetForm } = useForm(formData, validacionFormulario)


  const onSubmit = (event) => {
    event.preventDefault();

    emailjs
    .sendForm( serviceId, templateId , form.current, userId)
    .then(
      (result) => {
        setAlertSucces(false);
        onResetForm();
      },
      (error) => {
        setAlertError(false);
      }
    );
   }

    
return (
  <Grid container gap={1} justifyContent='center' height='max-content' alignItems='center'>

    <Typography variant="h2">Envíanos un mensaje { query.c && `para ${query.c}`} </Typography>
    <Typography variant="p" textAlign='center'>Completá el formulario para comunicarte con nosotros. ¡Te contactaremos a la brevedad!</Typography>
    <Grid container mt='1rem' gap={1} component='form' p={3} onSubmit={onSubmit} ref={form}>

      {query.c === 'alquilar' && <Typography textAlign='center'>Uds está averiguando por la propiedad codigo: {query.id} </Typography>}

      <TextField label='Nombre y Apellido' fullWidth value={user_name} name='user_name' onChange={onInputChange} />
      {errorFormValid.user_name && <FormHelperText error>{errorFormValid.user_name}</FormHelperText>}

      <TextField label='Email' fullWidth value={user_email} name='user_email' onChange={onInputChange} />
      {errorFormValid.email && <FormHelperText error>{errorFormValid.email}</FormHelperText>}

      <TextField label='Telefono' fullWidth value={phone} name='phone' onChange={onInputChange} />
      {errorFormValid.phone && <FormHelperText error>{errorFormValid.phone}</FormHelperText>}

      <TextField  label='Consulta' multiline rows={8} fullWidth value={message} name='message' onChange={onInputChange} />
      {errorFormValid.message && <FormHelperText error>{errorFormValid.message}</FormHelperText>}


      {!alertSucces && <Alert severity="success" sx={{width:'100%'}}>Formulario enviado con éxito</Alert> }
      {!alertError && <Alert variant="outlined" severity="error" width="40rem">No se pudo enviar el formulario</Alert> }
      

      <Button variant="contained" fullWidth type="submit">ENVIAR</Button>

    </Grid>
  </Grid>
  )
}

export default FormContact;

