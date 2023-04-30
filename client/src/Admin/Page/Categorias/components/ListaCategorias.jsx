import { ListItemText, Accordion, AccordionSummary, AccordionDetails, IconButton } from "@mui/material/";
import TablaInmuebleCategorias from "./TablaInmuebleCategorias";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Fragment } from "react";




const ListaCategorias = ({ nombre, inmuebles }) => {

  return (
  <Accordion sx={{ boxShadow: "none", height: "max-content", gap: 2 }} >
    <AccordionSummary>
      <ListItemText primary={nombre} />
      <IconButton>
        <KeyboardArrowDownIcon />
      </IconButton>
    </AccordionSummary>

    <AccordionDetails>
     {
      inmuebles?.map( i => ( <Fragment key={i.id}><TablaInmuebleCategorias i={i}/></Fragment> ))
     }
    </AccordionDetails>
  </Accordion>
  );
};

export default ListaCategorias;
