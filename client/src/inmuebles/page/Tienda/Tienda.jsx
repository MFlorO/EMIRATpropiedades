import { InmuebleLayout } from "../../layout";
import { Banner, Filtros, Ordenamientos, Paginado, Productos } from "./components";
import { Grid } from '@mui/material';



const Tienda = () => {

  return (
  <>
    <Banner />
    <InmuebleLayout>
      <Grid container justifyContent="space-between" pt={10}>
        
        <Grid item xs={12} sm={2.5} minHeight={{ xs: "3rem", sm: "8rem" }} backgroundColor='white' height='max-content' boxShadow={{xs:'none', sm:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}}>
          <Filtros />
        </Grid>

        <Grid item xs={12} sm={8.5}>
          <Grid container width='100%' alignItems='center' justifyContent={{ xs: "center", sm: "space-between" }} gap={{ xs: 3, sm: 0 }}>
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
