import { Grid, Icon, Typography } from "@mui/material"
import { InmuebleLayout } from "../../layout"
import { heightViews } from "../../layout/InmuebleLayout"
import { styled } from '@mui/material/styles';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const Administracion = () => {
  return (
    <InmuebleLayout>
        <Grid container width='100%' height='max-content' minHeight='15rem' mt={`${heightViews}rem`} justifyContent='center' alignItems='center' gap={5}>
          <Typography variant="h2">ADMINISTRACIÓN Y GESTION DE INMUEBLES</Typography>
          <Grid container direction={{xs:'column', sm:'row'}} width='90%' height='12rem' gap={4} justifyContent='space-around'> 
            <GridStyle container xs={12} sm={3.5}> 
              <IconStyle><CorporateFareIcon sx={{fontSize:'40px'}}/></IconStyle>
              <TypographyStyle>Control minusioso de garantías</TypographyStyle>
            </GridStyle>
            <GridStyle container xs={12} sm={3.5}>
              <IconStyle><AddBusinessIcon sx={{fontSize:'40px'}}/></IconStyle>
              <TypographyStyle>Seguimiento el estado del inmueble</TypographyStyle>
            </GridStyle>
            <GridStyle container xs={12} sm={3.5}>
              <IconStyle><AttachMoneyIcon sx={{fontSize:'40px'}}/></IconStyle>
              <TypographyStyle>Seguimiento en cobro de pagos</TypographyStyle>
            </GridStyle>
          </Grid>
        </Grid>
    </InmuebleLayout>
  )
}

export default Administracion;


const GridStyle = styled(Grid)(({ theme }) => ({
  flexDirection:'column',
  gap: '20px',
  backgroundColor: theme.palette.primary.main,
  // backgroundColor: 'white',
  // borderColor: theme.palette.primary.main,
  border: '2px solid',
  alignItems:'center',
  justifyContent:'center'
}));


const TypographyStyle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontFamily: theme.typography.h5.fontFamily,
  fontWeight: 400,
  fontSize: theme.typography.h5.fontSize,
  color: theme.palette.secondary.main,
}));


const IconStyle = styled(Icon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  width: '100%',
  height: 'max-content'
}));


