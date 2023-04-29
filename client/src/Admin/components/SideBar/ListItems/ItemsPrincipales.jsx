import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material/";

import CastIcon from "@mui/icons-material/Cast";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppsIcon from '@mui/icons-material/Apps';


const ItemsPrincipales = () => {

  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    
  }, [navigate]);


  const listas = (navigateDireccion, icono, texto) => {
    return (
      <ListItemButton onClick={() => navigate(`/dashboard/admin/${navigateDireccion}`)}>
        <ListItemIcon sx={{color: `${theme.palette.primary.main}`}}>{icono}</ListItemIcon>
        <ListItemText primary={texto}  />
      </ListItemButton>
    );
  };

  return (
    <>
    
     {listas("", <CastIcon />, "Dashboard")}
      
     { listas("productos", <InventoryIcon  />, "Productos" ) }

     { listas("categorias", <AppsIcon  />, "Categorias" ) }

     { listas("usuarios", <PersonIcon  />, "Usuarios" ) }

    </>
  );
};

export default ItemsPrincipales;