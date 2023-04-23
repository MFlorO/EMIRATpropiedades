import { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Checkbox, Typography, FormGroup, FormLabel } from "@mui/material"
import { styled } from '@mui/material/styles';
import { filtroCat } from "~/redux/actions";



const FiltrosPorCategoria = () => {

  const [selectedValue, setSelectedValue] = useState('');

  const dispatch = useDispatch()
  
  const handleCheckChange = (event) => {
    event.preventDefault()
    setSelectedValue(event.target.value);
    dispatch(filtroCat(event.target.value))
  }

  return (
    <Grid container direction='column' gap={1}>
      <Typography variant="h4">Operación:</Typography>
      <FormGroup sx={{ display:'flex', flexDirection:'row', alignItems:'center'}}>

        <Gridcheck>
            <FormLabel>Alquiler</FormLabel>
            <Checkbox checked={selectedValue === 'alquiler'} name="alquiler" value="alquiler" onChange={handleCheckChange} />
        </Gridcheck>

        <Gridcheck>
            <FormLabel>Venta</FormLabel>
            <Checkbox checked={selectedValue === 'venta'} name="venta" value="venta" onChange={handleCheckChange} />
        </Gridcheck>


      </FormGroup>
    </Grid>
  )
}

export default FiltrosPorCategoria;




const Gridcheck = styled(Grid)(({ theme }) => ({
  display:'flex',
  flexDirection:'column',
  justifyContent: 'center',
  alignItems:'center'
}));
