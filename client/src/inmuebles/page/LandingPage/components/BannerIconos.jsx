import { IconButton, Grid, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import KeyIcon from '@mui/icons-material/Key';
import { useNavigate } from "react-router-dom";



const BannerIconos = () => {

  const navigate = useNavigate()


  return (
    <Grid container width='100%' minHeight='20rem' justifyContent='center' mb={10} p={8}>
    <Grid container width='100%' direction={{xs:'column', sm: 'row'}}  justifyContent='space-around' alignItems='center' gap={2} >

      <GridIcon>
       <ButtonStyle onClick={() => navigate('/tienda')}><HomeIcon sx={{fontSize:'60px'}}/></ButtonStyle>
       <TypographyStyle>INMUEBLES</TypographyStyle>
      </GridIcon>

      <GridIcon>
       <ButtonStyle onClick={() => navigate('/tienda?c=alquiler')}><MapsHomeWorkIcon sx={{fontSize:'60px'}}/></ButtonStyle>
       <TypographyStyle>ALQUILER</TypographyStyle>
      </GridIcon>

      <GridIcon>
       <ButtonStyle onClick={() => navigate('/tienda?c=venta')}><AttachMoneyIcon sx={{fontSize:'60px'}}/></ButtonStyle>
       <TypographyStyle>COMPRAR</TypographyStyle>
      </GridIcon>


      <GridIcon>
       <ButtonStyle onClick={() => navigate('/administracion')}><KeyIcon sx={{fontSize:'60px'}}/></ButtonStyle>
       <TypographyStyle>ADMINISTRACION</TypographyStyle>
      </GridIcon>

    </Grid>
    </Grid>
  )
}

export default BannerIconos



const ButtonStyle = styled(IconButton)(({ theme }) => ({
    cursor: 'pointer',
    border: `2px solid ${theme.palette.primary.main}`,
    BorderRadidus: '90px',
    color: theme.palette.primary.main,
    padding:'10px'
  }));
  


const TypographyStyle = styled(Typography)(({ theme }) => ({
    cursor: 'pointer',
    fontFamily: theme.typography.h3.fontFamily,
    fontWeight: 400,
    fontSize: '18px',
    color: theme.palette.primary.main,
  }));



const GridIcon = styled(Grid)(({ theme }) => ({
    display:'flex',
    flexDirection:'column', 
    justifyContent:'center',
    alignItems:'center'
  }));