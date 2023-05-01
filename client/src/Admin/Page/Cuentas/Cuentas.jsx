import { AdminLayOut } from "~/Admin/layout"
import { Container, Grid, Paper, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";



const Cuentas = () => {

  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <AdminLayOut>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
  
      <Grid item xs={12} md={4} lg={12}>
        <Paper sx={{ p: 2, backgroundColor: theme.palette.background.dark }} >
          <Button onClick={() => navigate(`/dashboard/admin/cuentas/crearcuenta`)} color="secondary"><AddIcon />CREAR CUENTA</Button>
          <Grid container mt={4}>
            ACA VA LA LISTA DE TODOS LOS Participantes
          </Grid>
        </Paper>
      </Grid>
  
  
  
  
      </Grid>
      </Container>
    </AdminLayOut>
  )
}

export default Cuentas;