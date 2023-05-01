import { AdminLayOut } from "../../layout";
import { Container, Grid, Paper, useTheme} from "@mui/material";
import OrdenesRecientes from "./OrdenesRecientes";
import Graficos from "./Graficos";




const Dashboard = () => {

  const theme = useTheme()

  return (
    <AdminLayOut>
    <Container>
    <Grid container spacing={3}>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 240, backgroundColor: theme.palette.background.dark }}> DEPOSITS </Paper>
          </Grid>

          <Grid item xs={12} md={4} >
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 240, backgroundColor: theme.palette.background.dark }}> DEPOSITS </Paper>
          </Grid>

          <Grid item xs={12} md={4} >
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 240, backgroundColor: theme.palette.background.dark }}> DEPOSITS </Paper>
          </Grid>

          <Grid item xs={12} >
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 240, backgroundColor: theme.palette.background.dark}}><Graficos /></Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 240, backgroundColor: theme.palette.background.dark}}><OrdenesRecientes /></Paper>
          </Grid>
          
    </Grid>
    </Container>
    </AdminLayOut>
  );
};

export default Dashboard;
