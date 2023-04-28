import { AdminLayOut } from "~/Admin/layout"
import { Container, Grid, Paper } from "@mui/material";


const Usuarios = () => {
  return (
    <AdminLayOut>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
  
      <Grid item xs={12} md={4} lg={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 300 }}>
          ACA VA LA LISTA DE TODOS LOS USUARIOS
        </Paper>
      </Grid>
  
  
  
  
      </Grid>
      </Container>
    </AdminLayOut>
  )
}

export default Usuarios;