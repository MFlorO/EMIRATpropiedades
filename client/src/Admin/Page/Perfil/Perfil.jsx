import { AdminLayOut } from "~/Admin/layout"
import { Container, Grid, Paper, useTheme } from "@mui/material";


const Perfil = () => {
  const theme = useTheme()
  return (
    <AdminLayOut>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
  
      <Grid item xs={12} md={4} lg={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 300, backgroundColor: theme.palette.background.dark }}>
          PERFIL
        </Paper>
      </Grid>
  
  
  
  
      </Grid>
      </Container>
    </AdminLayOut>
  )
}

export default Perfil;



