import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material/";

import CastIcon from "@mui/icons-material/Cast";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import AppsIcon from '@mui/icons-material/Apps';
import { useSelector } from "react-redux";






const ItemsPrincipales = () => {

  const navigate = useNavigate();
  const theme = useTheme();

  const { isAdmin } = useSelector( state => state.auth )

  const admin = useMemo( () => isAdmin === true , [isAdmin])

  useEffect(() => {
    
  }, [navigate]);


  const listas = (navigateDireccion, icono, texto) => {
    return (
      <ListItemButton onClick={() => navigate(`/dashboard/admin/${navigateDireccion}`)}>
        <ListItemIcon sx={{color: `${theme.palette.secondary.main}`}}>{icono}</ListItemIcon>
        <ListItemText primary={texto} sx={{color: theme.palette.text.main }} />
      </ListItemButton>
    );
  };

  return (
    <>
    
     {listas("", <CastIcon />, "Dashboard")}
      
     { listas("inmuebles", <InventoryIcon  />, "Inmuebles" ) }

     { listas("categorias", <AppsIcon  />, "Categorias" ) }

     {/* SOLO VA A PODER VER ESTE ITEMS EL ADMINISTRADOR */}
     { admin && listas("cuentas", <PersonIcon  />, "Cuentas" ) }

    </>
  );
};

export default ItemsPrincipales;