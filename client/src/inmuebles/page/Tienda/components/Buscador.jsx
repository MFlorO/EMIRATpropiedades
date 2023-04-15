import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Button, TextField} from "@mui/material";



const Buscador = () => {

  const navigate = useNavigate()
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => setSearch(event.target.value);


  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/tienda?search=${search}`)
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
