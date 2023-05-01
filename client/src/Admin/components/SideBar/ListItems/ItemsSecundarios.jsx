import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "~/redux/actions/auth";
import { ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography, useTheme } from "@mui/material/";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from '@mui/icons-material/Settings';


const ItemsSecundarios = () => {

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector( state => state.auth )

  useEffect(() => {
    if (status === 'no-autenticado') {
      navigate('/ingreso/panel')
    }
  }, [status, navigate])
  

  const listas = (navigateDireccion, icono, texto) => {
    return (
      <ListItemButton onClick={() => navigate(`/dashboard/admin/${navigateDireccion}`) }>
        <ListItemIcon sx={{color: `${theme.palette.secondary.main}`}}>{icono}</ListItemIcon>
        <ListItemText primary={texto} sx={{color: theme.palette.text.main }} />
      </ListItemButton>
    );
  };


  return (
    <>

       <ListSubheader component="div" sx={{backgroundColor: theme.palette.background.dark, color: theme.palette.secondary.main }}>
         <Typography component="h6" fontSize={12} fontWeight={600} textAlign='center' marginTop='1rem' marginBottom='1rem'>ADMINISTRADOR</Typography>
       </ListSubheader>

      {listas( "perfil", <AccountCircleIcon />, "Perfil")}

      <ListItemButton onClick={() => dispatch(logout())}>
        <ListItemIcon sx={{color: `${theme.palette.secondary.main}`}}><SettingsIcon /></ListItemIcon>
        <ListItemText primary={'Cerrar Sesión'} sx={{color: theme.palette.text.main }}/>
      </ListItemButton>

    </>
  );
};

export default ItemsSecundarios;