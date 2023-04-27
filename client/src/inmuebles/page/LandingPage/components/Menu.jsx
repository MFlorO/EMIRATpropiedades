import { Button, Grid } from "@mui/material"
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";





const Menu = () => {
  const navigate = useNavigate()
  return (
    <Grid container position='absolute' top={{xs:'86%', sm:'80%'}} right={{xs:'5%', sm:'23%'}} direction='row' width={{xs:'90%',sm:'55%'}} justifyContent='space-around' height={{xs:'20%', sm:'30%'}}
     boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;' zIndex={200} backgroundColor='#FFFFFF'
     gap={1} 
    >
        <ButtonStyles onClick={() => navigate('/tienda?c=alquiler&paginaActual=1&items=5')}>ALQUILER</ButtonStyles>

        <GridBorder></GridBorder>

        <ButtonStyles onClick={() => navigate('/tienda?c=venta&paginaActual=1&items=5')}>COMPRAR</ButtonStyles>

        <GridBorder></GridBorder>

        <ButtonStyles onClick={() => navigate('/contacto?c=vender')}>VENDER</ButtonStyles>
    </Grid>
  )
}

export default Menu;






const ButtonStyles = styled(Button)(({ theme }) => ({
    borderRadius:'0px',
    flexGrow: 1,
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: '15px',
    '&:hover': {
        color:'#C39315', 
        backgroundColor: '#281D44'
      },
  }));


  const GridBorder = styled(Grid)(({ theme }) => ({
    border:'1px solid #C5C5C5',
    alignSelf: 'center',
    height: '40%'
  }));
