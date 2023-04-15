import { Link as RouterLink, useLocation } from "react-router-dom";
import { Grid, Link } from '@mui/material'
import { styled } from '@mui/material/styles';
import { item } from "../itemsNavBar";


const MenuDesktop = () => {

 const { pathname } = useLocation()

 return (
  <Grid container direction='row' justifyContent='end' gap={2}>
    {item.map((item) => (
      <StyledLink key={item.nombre} component={RouterLink} to={item.link} color={pathname !== '/' ? '#000' : '#FFFF' }>
        {item.nombre}
      </StyledLink>
    ))}
  </Grid>
  )
}

export default MenuDesktop;




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
