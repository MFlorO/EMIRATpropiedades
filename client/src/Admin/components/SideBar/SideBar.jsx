import { ItemsPrincipales, ItemsSecundarios } from './ListItems';
import { heightNavbar, heightSidebar, widthSideBar } from '../../layout/AdminLayOut';
import { styled } from '@mui/material/styles';
import { Box, Toolbar, Divider, List, useTheme } from '@mui/material';



const SideBar = () => {
  const theme = useTheme();
  return (
    <BoxStyled left={{xs:'1rem', sm:'0.5rem'}} position={{xs:'absolute', sm:'fixed'}}>
      <Toolbar sx={{color: `${theme.palette.secondary.main}`}}>EMIRAT propiedades</Toolbar>
      <Divider />
      <List component="nav">
        <ItemsPrincipales /> 
        <Divider sx={{ my: 1 }} />
        <ItemsSecundarios />
      </List>
    </BoxStyled>
  );
};

export default SideBar;






const BoxStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.background.dark,
  boxShadow:' 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)', 
  borderRadius:'30px 0px 0px 30px',
  width:`${widthSideBar}rem`, top:`${heightNavbar}rem`, height:`${heightSidebar}rem`,
}));

