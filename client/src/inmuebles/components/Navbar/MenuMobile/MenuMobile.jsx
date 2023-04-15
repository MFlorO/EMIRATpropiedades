import { Fragment, useState } from "react";
import { IconButton, Drawer, List, ListItem, ListItemText, Grid, Typography, Link, Divider, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { item } from "../itemsNavBar";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { styled } from '@mui/material/styles';



const MenuMobile = () => {

  const { pathname } = useLocation()

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => () => setOpenDrawer(!openDrawer);
   
  const colorBoton = pathname !== '/' ? '#000' : '#FFFF'

  return (
    <>
    <IconButton sx={{color: colorBoton}} onClick={() => setOpenDrawer(!openDrawer)}>
      <MenuIcon /><Typography variant="h4">Menu</Typography>
    </IconButton>

    <Drawer anchor='right' variant='temporary' open={openDrawer} onClose={toggleDrawer} >
    <Grid paddingTop='1rem'>
      <Grid borderBottom='solid 2px #DBDBDB' paddingBottom='1rem'>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)} color="primary"><CloseIcon /></IconButton>
      </Grid>

      <Stack p={2} sx={{display:'flex', flexDirection:'column', justifyContent:'start'}}>
      {item.map((item) => (
        <Fragment key={item.nombre}>
        <StyledLink component={RouterLink}  to={item.link} p={2}>
          <Typography>{item.nombre}</Typography>
        </StyledLink>

         {item.subItems && 
          <>
          <Divider color='secondary'/>
          {item.subItems?.map( s => (
          <ListItem key={s.nombre}>
            <StyledLink component={RouterLink} to={s.link}><ListItemText>{s.nombre}</ListItemText></StyledLink>
          </ListItem>
          ))}
          <Divider color='secondary'/>
          </>
         }
        </Fragment>
      ))}
      </Stack>

      </Grid>
    </Drawer>
  </>

  )
}

export default MenuMobile;




const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  cursor: 'pointer',
  fontFamily: theme.typography.h3.fontFamily,
  fontWeight: 400,
  fontSize: '16px',
  '&:hover': {
    borderBottom:'2px solid white'
  },
}));
