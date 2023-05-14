import { ListItemText, Accordion, AccordionSummary, AccordionDetails, IconButton, useTheme } from "@mui/material/";
import TablaInmuebleCategorias from "./TablaInmuebleCategorias";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Fragment } from "react";



const ListaCategorias = (categoria) => {

  const { nombre, inmuebles } = categoria

  const theme = useTheme()
  return (
  <Accordion sx={{ boxShadow: "none", height: "max-content", gap: 2, backgroundColor:theme.palette.background.dark  }} >
    <AccordionSummary>
      <ListItemText primary={nombre} />
      <IconButton>
        <KeyboardArrowDownIcon />
      </IconButton>
    </AccordionSummary>

    <AccordionDetails>
     <TablaInmuebleCategorias inmuebles={inmuebles} />
    </AccordionDetails>
  </Accordion>
  );
};

export default ListaCategorias;
