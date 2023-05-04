import { Link as LinkRouter, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createInmueble } from "~/redux/actions/admin";
import { AdminLayOut } from "~/Admin/layout"
import { validacionFormularioInmueble } from "../../../../functions/validacionFormularioInmueble";
import { useForm } from "../../../../Hook/useForm";
import { Container, Paper, Button, Typography, Stack, Alert, Link, useTheme, Select, FormControlLabel, Checkbox, InputLabel, MenuItem, IconButton } from "@mui/material";
import PrimeraParteFormulario from "./PrimeraParteFormulario";
import SegundaParteFormulario from "./SegundaParteFormulario";
import TerceraParteFormulario from "./TerceraParteFormulario";
import { useState } from "react";



let data = {
  nombre: '',
  descripcion: '',
  precio: 0,
  moneda: "USD",
  fechaPublicacion: '',
  direccion: '',
  destacado: "false",
  dormitorios: 0,
  antiguedad: 0,
  m2: 0,
  baños: 0,
  pileta: "false",
  cochera: 0,
  imagen: [],
  idCategoria: [],
}




const CrearProducto = () => {

  const theme = useTheme()
  const dispatch = useDispatch()
  const [imagen, setimagen] = useState("")
  // const navigate = useNavigate()


  const { nombre , descripcion, precio, moneda, fechaPublicacion, direccion, destacado, dormitorios, antiguedad, m2, baños, pileta, cochera, idCategoria, 
    onInputChange, onResetForm, formState, setFormState } = useForm(data, validacionFormularioInmueble)



  const onSubmit = (event) => {
    console.log('submit', formState)
    console.log('submit-imagen', imagen)

    event.preventDefault();
    dispatch(createInmueble({nombre , descripcion, precio, moneda, fechaPublicacion, direccion, destacado, dormitorios, antiguedad, m2, baños, pileta, cochera, imagen}));
    onResetForm();
  }

  
  console.log('imagen', imagen)

  return (
  <AdminLayOut>
  <Container maxWidth="md">
  
  <Stack>
  <Paper sx={{ p: 2, display: "flex", flexDirection: "column", backgroundColor: theme.palette.background.dark }}>

    <Link component={LinkRouter} to='/dashboard/admin/inmuebles/' sx={{color: theme.palette.text.main, fontSize:'12px', textDecoration:'underline'}}>Volver a Inmuebles</Link>

    <Typography variant='h4' textAlign='center' color='secondary' mt={4} mb={5}>CREAR PRODUCTO</Typography>
       
    <form style={{p: 2, display: "flex", flexDirection: "column", justifyContent:'center',  gap:'1rem'}} onSubmit={onSubmit}>

      <PrimeraParteFormulario formState={formState} onInputChange={onInputChange}/>

      <SegundaParteFormulario idCategoria={idCategoria} destacado={destacado} onInputChange={onInputChange}/>

      <TerceraParteFormulario imagen={imagen} setimagen={setimagen} />



      <Button variant="contained" type="submit" color="secondary">SIGUIENTE</Button>
    </form>

  </Paper>
  </Stack> 

  </Container>
  </AdminLayOut>
  )
}

export default CrearProducto;




