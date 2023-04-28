import { useNavigate } from "react-router-dom";
import { AdminLayOut } from "~/Admin/layout"
// import { ListaProductos } from './components';
import { Container, Grid, Paper, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
// import { Fragment } from "react";


const Productos = () => {

//  const { productos, productosCopia } = useProductos()

 const navigate = useNavigate()

 return (
  <AdminLayOut>
  <Container>
  <Grid container spacing={3} >

  <Grid item xs={12} width={{xs:'5rem', sm:'max-content'}} minHeight={{xs:'5rem', sm:'20rem'}} >
    <Paper sx={{ p: 2 }} >
      <Button onClick={() => navigate(`/dashboard/admin/productos/crearproducto`) }><AddIcon />Crear Producto</Button>
      {/* {productos?.map(p => <Fragment key={p.codigo}><ListaProductos {...p} /></Fragment>)}  */}
    </Paper>
  </Grid>

  </Grid>
  </Container>
  </AdminLayOut>
)}

export default Productos;