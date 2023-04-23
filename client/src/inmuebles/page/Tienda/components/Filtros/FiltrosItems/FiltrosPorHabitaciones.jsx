import { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Checkbox, Typography, FormGroup, FormLabel } from "@mui/material"
import { styled } from '@mui/material/styles';
import { filtroHab } from "~/redux/actions";



const FiltrosPorHabitaciones = () => {

  const [selectedValue, setSelectedValue] = useState('');

  const dispatch = useDispatch()
  
  const handleCheckChange = (event) => {
    event.preventDefault()
    setSelectedValue(event.target.value);
    dispatch(filtroHab(event.target.value))
  }

  return (
    <Grid container gap={1}>
      <Typography variant="h4">Cantidad de Habitaciones:</Typography>
      <FormGroup sx={{ display:'flex', flexDirection:'row', alignItems:'center'}}>

        <Gridcheck>
            <FormLabel>1</FormLabel>
            <Checkbox checked={selectedValue === '1'} name="1" value="1" onChange={handleCheckChange} />
        </Gridcheck>

        <Gridcheck>
            <FormLabel>2</FormLabel>
            <Checkbox checked={selectedValue === '2'} name="2" value="2" onChange={handleCheckChange} />
        </Gridcheck>

        <Gridcheck>
            <FormLabel>3</FormLabel>
            <Checkbox checked={selectedValue === '3'} name="3" value="3" onChange={handleCheckChange} />
        </Gridcheck>

        <Gridcheck>
            <FormLabel>+4</FormLabel>
            <Checkbox checked={selectedValue === '+4'} name="+4" value="+4" onChange={handleCheckChange} />
        </Gridcheck>

      </FormGroup>
    </Grid>
  )
}

export default FiltrosPorHabitaciones;



const Gridcheck = styled(Grid)(({ theme }) => ({
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center'
  }));
  