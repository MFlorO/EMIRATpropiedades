import {  useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { startGoogleSignIn, checkingCredentials } from '~/redux/actions/auth';
import { validacionFormulario } from '../functions';
import { useForm } from '../hook';
import { styled } from '@mui/material/styles';
import { Button, TextField, FormControlLabel, Checkbox, Link, Box, Grid, Typography, Stack } from '@mui/material';



let formData = {
    email: '',
    password: '',
  }



  
const FormSignIn = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()  
  const { status } = useSelector( state => state.auth )
  const { email, password, onInputChange, errorFormValid, formValid, onResetForm, formState } = useForm(formData, validacionFormulario)

  const checking = useMemo( () => status === 'checking', [status])

  useEffect(() => {
    if (status === 'autenticado') {
      navigate('/dashboard/admin/')
    }
  }, [status, navigate])


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingCredentials())
  };

  
  const onGoogleSignIn =  async() => await dispatch(startGoogleSignIn())


  return (
  <Box component="form" noValidate onSubmit={handleSubmit}>
    <TextField margin="normal" fullWidth value={email} label="Email" name="email" autoComplete="email" onChange={onInputChange} autoFocus />
    <TextField margin="normal" fullWidth value={password} label="Contraseña" name="password" autoComplete="password" onChange={onInputChange}  />
    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recordarme" />
    <Stack flexDirection='row' mt={2} mb={2} gap={2}>
      <Button type="submit" fullWidth variant="contained" disabled={checking}>INGRESAR</Button>
      <ButtonGoogle fullWidth variant="contained" onClick={onGoogleSignIn} disabled={checking}><Typography>Google</Typography></ButtonGoogle>
    </Stack>
    <Grid container><Link href="#" variant="body2">¿Olvidó la contraseña?</Link></Grid>
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>{'Copyright © '}Florencia Oldani {new Date().getFullYear()}</Typography>
  </Box>
  )
}

export default FormSignIn;




const ButtonGoogle = styled(Button)(({ theme }) => ({
    backgroundColor: '#ea4335',
    backgroundImage: 'linear-gradient(90deg, #ea4335 15%, #ffbc05 50%, #34a853 77%, #4285fa 87%)'
  }));
  
  