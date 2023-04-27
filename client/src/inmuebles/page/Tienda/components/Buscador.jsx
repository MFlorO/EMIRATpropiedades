import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPaginaActual } from "~/redux/actions/inmuebles";
import useQueryParams from "../../../Hook/useQueryParams";
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Button, TextField} from "@mui/material";



const Buscador = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => setSearch(event.target.value);

  const { c, items } = useQueryParams()


  const handleSubmit = (event) => {
    event.preventDefault();
    if(c !== undefined && c !== 'todos') {
      dispatch(setPaginaActual(1))
      navigate(`/tienda?c=${c}&s=${search.toLowerCase()}&paginaActual=1&items=${items}`)
    } else {
      navigate(`/tienda?s=${search.toLowerCase()}&paginaActual=1&items=${items}`)
      dispatch(setPaginaActual(1))
    }            
    setSearch("");
  };


  return (
    <Grid container component='form' justifyContent='center' onSubmit={handleSubmit} >
      <TextField
          sx={{ backgroundColor:'white', width:'80%' }}
          label="Buscar por nombre o codigo"
          variant="outlined"
          type="text"
          name={search}
          value={search}
          onChange={onSearchChange}
        />
       <Button variant="contained" sx={{borderRadius:'0px 20px 20px 0px'}}><SearchIcon color="secondary"/></Button>
    </Grid>
  );
};

export default Buscador;
