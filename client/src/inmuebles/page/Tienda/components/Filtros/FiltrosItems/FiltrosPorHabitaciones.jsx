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
      <Typography variant="h4" fontWeight={600}>Cantidad de Habitaciones:</Typography>
      <FormGroup sx={{ display:'flex', flexDirection:'column', alignItems:'start'}}>

        <Gridcheck>
            <Checkbox checked={selectedValue === '1'} name="1" value="1" onChange={handleCheckChange} />
            <FormLabel>Monoambiente</FormLabel>
        </Gridcheck>

        <Gridcheck>
            <Checkbox checked={selectedValue === '2'} name="2" value="2" onChange={handleCheckChange} />
            <FormLabel>2 hambitaciones</FormLabel>
        </Gridcheck>

        <Gridcheck>
            <Checkbox checked={selectedValue === '3'} name="3" value="3" onChange={handleCheckChange} />
            <FormLabel>3 habitaciones</FormLabel>
        </Gridcheck>

        <Gridcheck>
            <Checkbox checked={selectedValue === '+4'} name="+4" value="+4" onChange={handleCheckChange} />
            <FormLabel>+ 4 habitaciones</FormLabel>
        </Gridcheck>

      </FormGroup>
    </Grid>
  )
}

export default FiltrosPorHabitaciones;



const Gridcheck = styled(Grid)(({ theme }) => ({
    display:'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center'
  }));
  