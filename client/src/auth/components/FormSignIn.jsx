import {  useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { startGoogleSignIn, startLoginWithEmailPassword } from '~/redux/actions/auth';
import { validacionFormulario } from '../functions';
import { useForm } from '../hook';
import { styled } from '@mui/material/styles';
import { Button, TextField, FormControlLabel, Checkbox, Link, Box, Grid, Typography, Stack, useTheme, Alert } from '@mui/material';



let formData = {
    email: '',
    password: '',
  }



  
const FormSignIn = () => {

  const theme = useTheme()
  const navigate = useNavigate()
  const dispatch = useDispatch()  
  const { status, errorMessage } = useSelector( state => state.auth )
  const { email, password, onInputChange, errorFormValid, formValid, onResetForm, formState } = useForm(formData, validacionFormulario)

  const checking = useMemo( () => status === 'checking', [status])

  useEffect(() => {
    (status === 'autenticado') && navigate('/dashboard/admin/')
  }, [status, navigate])


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({email,password}))
  };

  
  const onGoogleSignIn =  async() => await dispatch(startGoogleSignIn())

  return (
  <Box component="form" noValidate onSubmit={handleSubmit}>

    <TextField margin="normal" fullWidth value={email} type='email' label="Email" name="email" autoComplete="email" onChange={onInputChange} color='secondary'/>
    <TextField margin="normal" fullWidth value={password} type='password' label="Contraseña" name="password" autoComplete="password" onChange={onInputChange} color='secondary'  />
    <FormControlLabelStyle control={<Checkbox value="remember" color="secondary" />} label="Recordarme" />
    <Stack flexDirection='row' mt={2} mb={2} gap={2}>
      
      <Button type="submit" fullWidth variant="contained" color='secondary' disabled={checking}>INGRESAR</Button>
      <Button fullWidth variant="contained" onClick={onGoogleSignIn} disabled={checking}><Typography>Google</Typography></Button>
    </Stack>

    <Grid container mb={2}><Link href="#" variant="body2" color='secondary'>¿Olvidó la contraseña?</Link></Grid>

    {( errorMessage )&&  <Alert severity="error">{errorMessage}</Alert> }

    <Typography variant="h5" color="text.main" align="center" sx={{ mt: 3 }}>{'Copyright © '}Florencia Oldani {new Date().getFullYear()}</Typography>
  </Box>
  )
}

export default FormSignIn;




const FormControlLabelStyle = styled(FormControlLabel)(({ theme }) => ({
  color: theme.palette.secondary.main,
  border: theme.palette.secondary.main,
}));

