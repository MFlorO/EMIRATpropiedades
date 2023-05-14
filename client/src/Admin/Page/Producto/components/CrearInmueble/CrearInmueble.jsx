import { useState } from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createInmueble, setstate } from "~/redux/actions/admin";
import { AdminLayOut } from "~/Admin/layout"
import { validacionFormularioInmueble } from "../../../../functions/validacionFormularioInmueble";
import { useForm } from "../../../../Hook/useForm";
import { CategoriasForm, ImagenForm, PrimeraParteFormulario } from "./PartesDelForm";
import { Container, Paper, Button, Typography, Stack, Alert, Link, useTheme } from "@mui/material";



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
  idCategoria: "",
}



const CrearInmueble = () => {

  const [imagen, setimagen] = useState("")
  const { status } = useSelector( state => state.admin )
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const theme = useTheme()

  const { nombre , descripcion, precio, moneda, fechaPublicacion, direccion, destacado, dormitorios, antiguedad, m2, baños, pileta, cochera, idCategoria, onInputChange, onResetForm, formState, setFormState } = useForm(data, validacionFormularioInmueble)

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(createInmueble({nombre , descripcion, precio, moneda, fechaPublicacion, direccion, destacado, dormitorios, antiguedad, m2, baños, pileta, cochera, imagen, idCategoria}));
    onResetForm();
    setTimeout(() => {
      navigate('/dashboard/admin/inmuebles')
      dispatch(setstate({}))
    }, 2500);
  }
  

return (
  <AdminLayOut>
  <Container maxWidth="md">
  <Stack>
  <Paper sx={{ p: 2, display: "flex", flexDirection: "column", backgroundColor: theme.palette.background.dark }}>

    <Link component={LinkRouter} to='/dashboard/admin/inmuebles/' sx={{color: theme.palette.text.main, fontSize:'12px', textDecoration:'underline'}}>Volver a Inmuebles</Link>

    <Typography variant='h4' textAlign='center' color='secondary' mt={4} mb={5}>CREAR INMUEBLE</Typography>

    <form style={{p: 2, display: "flex", flexDirection: "column", justifyContent:'center',  gap:'1rem'}} onSubmit={onSubmit}>
      <PrimeraParteFormulario formState={formState} onInputChange={onInputChange}/>
      <CategoriasForm onInputChange={onInputChange}/>
      <ImagenForm imagen={imagen} setimagen={setimagen} />
      <Button variant="contained" type="submit" color="secondary">SIGUIENTE</Button>
      { status !== null && <Alert severity={status.ok === true ? "success" : "error"}>{status.status}</Alert> } 
    </form>

  </Paper>
  </Stack> 
  </Container>
  </AdminLayOut>
)
}

export default CrearInmueble;




