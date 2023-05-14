import { useDispatch } from "react-redux";
import { deleteInmueble } from "~/redux/actions/admin";
import TablaInmuebleCategorias from "./TablaInmuebleCategorias";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemText, Accordion, AccordionSummary, AccordionDetails, IconButton, Grid, useTheme } from "@mui/material/";



const ListaProductos = (i) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  return (
    <Accordion sx={{ boxShadow: "none", height: "max-content", gap: 2, backgroundColor:theme.palette.background.dark }} >
      <AccordionSummary>
        <ListItemText primary={i.nombre} />
        <IconButton><KeyboardArrowDownIcon /></IconButton>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container direction='row' p={2}>
          <Grid item xs={12} align='end'>
            <IconButton><EditIcon color="secondary"/></IconButton>
            <IconButton onClick={() => dispatch(deleteInmueble(i.id))}><DeleteIcon color="secondary"/></IconButton>
          </Grid>
          <Grid item xs={12}>
            <TablaInmuebleCategorias inmuebles={i} />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
export default ListaProductos;
