// import TablaPrincipal from "./TablaPrincipal";
import { ListItemText, Accordion, AccordionSummary, AccordionDetails, IconButton, Grid } from "@mui/material/";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@emotion/react";


const ListaProductos = (i) => {
  const theme = useTheme()
  return (
    <Accordion sx={{ boxShadow: "none", height: "max-content", gap: 2, backgroundColor:theme.palette.background.dark }} >
      <AccordionSummary>
        <ListItemText primary={i.nombre} />
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container spacing={2} boxShadow={'rgba(107, 107, 107, 0.5) 2px 2px 6px 2px inset'}>
          {/* <TablaPrincipal p={p} /> */}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default ListaProductos;
