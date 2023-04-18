import { IconButton, Grid, useTheme, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useNavigate } from "react-router-dom";



const Banner2 = () => {

  const theme = useTheme();
  const navigate = useNavigate()


  return (
    <Grid container backgroundColor={theme.palette.primary.main} width='100%' minHeight='15rem' justifyContent='center' mt={15}>
    <Grid container width='70%' direction={{xs:'column', sm:'row'}} justifyContent='space-around' alignItems='center' gap={2}>
      <GridIcon>
       <ButtonStyle onClick={() => navigate('/tienda')}><HomeIcon fontSize="large"/></ButtonStyle>
       <TypographyStyle onClick={() => navigate('/tienda')}>INMUEBLES</TypographyStyle>
      </GridIcon>

      <GridIcon>
       <ButtonStyle onClick={() => navigate('/nosotros')}><Diversity3Icon fontSize="large"/></ButtonStyle>
       <TypographyStyle>NOSOTROS</TypographyStyle>
      </GridIcon>

      <GridIcon>
       <ButtonStyle onClick={() => navigate('/administracion')}><AdminPanelSettingsIcon fontSize="large"/></ButtonStyle>
       <TypographyStyle>ADMINISTRACION</TypographyStyle>
      </GridIcon>

      <GridIcon>
       <ButtonStyle onClick={() => navigate('/contacto')}><VerticalSplitIcon fontSize="large"/></ButtonStyle>
       <TypographyStyle>Contacto</TypographyStyle>
      </GridIcon>
    </Grid>
    </Grid>
  )
}

export default Banner2



const ButtonStyle = styled(IconButton)(({ theme }) => ({
    cursor: 'pointer',
    border: '2px solid white',
    BorderRadidus: '90px',
    color:'white',
    padding:'3px'
  }));
  


const TypographyStyle = styled(Typography)(({ theme }) => ({
    cursor: 'pointer',
    fontFamily: theme.typography.h3.fontFamily,
    fontWeight: 200,
    fontSize: '15px',
    color:'white',
  }));



const GridIcon = styled(Grid)(({ theme }) => ({
    display:'flex',
    flexDirection:'column', 
    justifyContent:'center',
    alignItems:'center'
  }));