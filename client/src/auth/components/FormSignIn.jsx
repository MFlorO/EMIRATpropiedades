import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { startLoginWithEmailPassword } from '~/redux/actions/auth';
import { validacionFormulario } from '../functions';
import { useForm } from '../hook';
import { styled } from '@mui/material/styles';
import { Button, TextField, FormControlLabel, Link, Box, Grid, Typography, Alert, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



let formData = {
    email: '',
    password: '',
  }



  
const FormSignIn = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()  
  const { status, errorMessage } = useSelector( state => state.auth )
  const { email, password, onInputChange, errorFormValid, formValid, onResetForm, formState } = useForm(formData, validacionFormulario)
  
  const [showPassword, setShowPassword] = useState(false);

  const checking = useMemo( () => status === 'checking', [status])


  useEffect(() => {
    (status === 'autenticado') && navigate('/dashboard/admin/')
  }, [status, navigate])


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({email,password}))
  };


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => event.preventDefault()


  return (
  <Box component="form" noValidate onSubmit={handleSubmit}>

    <TextField margin="normal" fullWidth value={email} type='email' label="Email" name="email" autoComplete="email" onChange={onInputChange} color='secondary'/>

    <FormControl sx={{ width:'100%', mb:2 }} >
    <InputLabel color='secondary'>Password</InputLabel>
    <OutlinedInput value={password} type={showPassword ? 'text' : 'password'} label="Contraseña" name="password" onChange={onInputChange} color='secondary'   
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    }
    
    />
    </FormControl >

    <Button type="submit" fullWidth variant="contained" color='secondary' disabled={checking}>INGRESAR</Button>

    <Grid container mt={2} mb={2}><Link href="#" variant="body2" color='secondary'>¿Olvidó la contraseña?</Link></Grid>

    { errorMessage  && <Alert severity="error">{errorMessage}</Alert> }

    <Typography variant="h5" color="text.main" align="center" sx={{ mt: 3 }}>{'Copyright © '}Florencia Oldani {new Date().getFullYear()}</Typography>
  </Box>
  )
}

export default FormSignIn;




const FormControlLabelStyle = styled(FormControlLabel)(({ theme }) => ({
  color: theme.palette.secondary.main,
  border: theme.palette.secondary.main,
}));

