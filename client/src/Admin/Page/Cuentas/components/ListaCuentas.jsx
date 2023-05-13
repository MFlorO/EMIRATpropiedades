import useUsuarios from "../../../Hook/useUsuarios"
import { Stack, Typography, Grid, Switch, FormControlLabel } from "@mui/material";




const ListaCuentas = () => {

  const { todosUsuarios } = useUsuarios()

  console.log(todosUsuarios)
  // isBanned
  return (
    <Grid width='70vw' justifyContent='center'>
      {todosUsuarios?.map( u => (
        <Stack flexDirection='row' justifyContent='space-between' alignItems='center' key={u.uid}>
          <Typography>{u.email}</Typography>
          <Typography>{u.email}</Typography>
          <FormControlLabel control={<Switch defaultChecked color="secondary"/>}  label="Activo" labelPlacement="start"/>
        </Stack>
      ))}

    </Grid>
  )
}

export default ListaCuentas