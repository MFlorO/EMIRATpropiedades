import { useNavigate } from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography, useTheme } from "@mui/material/";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from '@mui/icons-material/Settings';


const ItemsSecundarios = () => {

  const navigate = useNavigate();
  const theme = useTheme();

  const listas = (navigateDireccion, icono, texto) => {
    return (
      <ListItemButton onClick={() => navigate(`/dashboard/admin/${navigateDireccion}`)}>
        <ListItemIcon sx={{color: `${theme.palette.primary.main}`}}>{icono}</ListItemIcon>
        <ListItemText primary={texto} />
      </ListItemButton>
    );
  };



  return (
    <>

       <ListSubheader component="div">
         <Typography component="h6" fontSize={12} fontWeight={600} textAlign='center' marginTop='1rem' marginBottom='1rem'>ADMINISTRADOR</Typography>
       </ListSubheader>

      {listas("perfil", <AccountCircleIcon />, "Perfil")}

      {listas("login", <SettingsIcon color='error'/>, "Cerrar Sesión")}

    </>
  );
};

export default ItemsSecundarios;