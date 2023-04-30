import { ListaCategorias } from './components';
import { AdminLayOut } from "~/Admin/layout"
import useCategoria from "../../Hook/useCategoria";
import { Container, Grid, Paper, Typography } from "@mui/material";




const Categorias = () => {

  const { categoria } = useCategoria()
  
  return (
  <AdminLayOut>
  <Container>
  <Grid container>

    <Grid item xs={12} width={{xs:'5rem', sm:'max-content'}} minHeight={{xs:'5rem', sm:'25rem'}} >
    <Paper sx={{ p: 2 }} >
      <Typography variant='p'>Lista de Categorias</Typography>
      { categoria?.map(c => <Grid gap={3} key={c.id}><ListaCategorias {...c} /></Grid>) } 
    </Paper>
    </Grid>

  </Grid>
  </Container>
  </AdminLayOut>
  )
}

export default Categorias;