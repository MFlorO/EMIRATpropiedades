import { styled } from '@mui/material/styles';
import { Grid, Icon, Typography } from "@mui/material"



const MenuAdministracion = ({icono, titulo, parrafo=""}) => {
  return (
    <GridStyle item width={{xs:'100%', sm:'32rem'}}> 
      <IconStyle>{icono}</IconStyle>
      <TypographyStyle>{titulo}</TypographyStyle>
      <TypographyParrafo>{parrafo}</TypographyParrafo>
    </GridStyle>
  )
}

export default MenuAdministracion;



const GridStyle = styled(Grid)(({ theme }) => ({
    flexDirection:'column',
    backgroundColor: theme.palette.primary.main,
    // backgroundColor: 'white',
    // borderColor: theme.palette.primary.main,
    // border: '2px solid',
    alignItems:'center',
    justifyContent:'center',
    padding: 20
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
  
  
  const TypographyParrafo = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    fontFamily: theme.typography.p.fontFamily,
    fontWeight: 200,
    fontSize: theme.typography.p.fontSize,
    color: theme.palette.secondary.main,
  }));
  