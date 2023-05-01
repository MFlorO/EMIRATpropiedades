import { useState } from "react";
import { IconButton, Drawer, Grid, Typography, useTheme, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import ItemsPrincipales from "./ListItems/ItemsPrincipales";
import ItemsSecundarios from "./ListItems/ItemsSecundarios";





const MenuMobile = () => {

  const theme = useTheme()
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => () => setOpenDrawer(!openDrawer);


  return (
    <Grid mt={1}>
    <IconButton color="secondary" onClick={() => setOpenDrawer(!openDrawer)}><MenuIcon /><Typography variant="h4">Menu</Typography></IconButton>

    <Drawer anchor='left' variant='temporary' open={openDrawer} onClose={toggleDrawer} >
    <Grid paddingTop='1rem' sx={{backgroundColor: theme.palette.background.dark, height:'100vh'}} >
      <Grid borderBottom='solid 2px #DBDBDB' paddingBottom='1rem'>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)} color="secondary"><CloseIcon /></IconButton>
      </Grid>

      <Stack p={2} sx={{display:'flex', flexDirection:'column', justifyContent:'start'}}>
        <ItemsPrincipales />
        <ItemsSecundarios />    
      </Stack>

      </Grid>
    </Drawer>
  </Grid>

  )
}

export default MenuMobile;



