import { useDispatch } from "react-redux";
import { setUserAdmin, deleteUser } from "~/redux/actions/admin";
import useUsuarios from "../../../Hook/useUsuarios"
import { Stack, Typography, Grid, Switch, FormControlLabel, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';



const ListaCuentas = () => {

  const { todosUsuarios } = useUsuarios()
  const dispatch = useDispatch()

  const changeAdmin = (uid) => dispatch(setUserAdmin(uid))
  const deleteUserBotton = (uid) => dispatch(deleteUser(uid))

  return (
    <Grid width='70vw' justifyContent='center' p={2}>
      {todosUsuarios?.map( u => (
        <Stack flexDirection='row' justifyContent='space-between' alignItems='center' key={u.uid}>
          <Typography>{u.nombre}</Typography>
          <Typography>{u.email}</Typography>
          <FormControlLabel control={<Switch checked={u.isActive} color="secondary"/>}  label="Activo" labelPlacement="end" onClick={() => changeAdmin(u.uid)}/>
          <IconButton onClick={() => deleteUserBotton(u.uid)}><DeleteIcon color="secondary"/></IconButton>
        </Stack>
      ))}

    </Grid>
  )
}

export default ListaCuentas