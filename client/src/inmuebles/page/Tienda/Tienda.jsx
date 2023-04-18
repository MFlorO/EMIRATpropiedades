import { InmuebleLayout } from "../../layout";
import { Banner, Filtros, Ordenamientos, Paginado, Productos } from "./components";
import { Grid, useTheme } from '@mui/material';



const Tienda = () => {

  const theme = useTheme();

  return (
  <>
    <Banner />
    <InmuebleLayout>
      <Grid container justifyContent="space-between" pt={10}>
        
        <Grid item xs={12} sm={3} minHeight={{ xs: "3rem", sm: "17rem" }} backgroundColor='white' 
        border={{xs:'none', sm:`2px solid ${theme.palette.primary.main}`}}>
          <Filtros />
        </Grid>

        <Grid item xs={12} sm={8.5}>
          <Grid container width='95%' justifyContent={{ xs: "center", sm: "space-between" }} gap={{ xs: 3, sm: 0 }}>
            <Ordenamientos />
            <Paginado />
          </Grid>

          <Grid item mt="2rem">
            <Productos />
          </Grid>
        </Grid>

      </Grid>
    </InmuebleLayout>
  </>
  );
};

export default Tienda;
