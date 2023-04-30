import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { AdminLayOut } from "~/Admin/layout"
import { ListaProductos } from './components';
import useInmuebles from "../../Hook/useInmuebles";
import { Container, Grid, Paper, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';



const Productos = () => {

 const { inmuebles } = useInmuebles()


 const navigate = useNavigate() 

 return (
  <AdminLayOut>
  <Container>
  <Grid container spacing={3}>

  <Grid item xs={12} width={{xs:'5rem', sm:'max-content'}} minHeight={{xs:'5rem', sm:'20rem'}} >
    <Paper sx={{ p: 2 }} >
      <Button onClick={() => navigate(`/dashboard/admin/inmuebles/inmueble`)} mb={2}><AddIcon />Crear Inmueble</Button>
      {inmuebles?.map(i => <Fragment key={i.id}><ListaProductos {...i} /></Fragment>)} 
    </Paper>
  </Grid>

  </Grid>
  </Container>
  </AdminLayOut>
)}

export default Productos;