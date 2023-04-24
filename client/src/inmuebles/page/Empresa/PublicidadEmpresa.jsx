import { styled } from '@mui/material/styles';
import { useTheme, useMediaQuery, Grid, Typography  } from '@mui/material';




const PublicidadEmpresa = ({direccion, imagen, titulo, texto}) => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints
  

  return (
    <Grid container direction={{xs:'column', sm:'row'}} height={{xs:'min-content', sm:'80vh'}} width={{xs:'100%', sm:'80%'}} backgroundColor={{xs:`${theme.palette.primary.main}`, sm:'white'}}>
      
      <Grid container direction='column' width={{xs:'100%', sm:'40%'}} height={{xs:'100%', sm:'80%'}} alignItems='center'justifyContent='center' order={direccion==='izquierda' ? 0 : 1}>
        {!isSmallScreen && <GridCuadrado container width='20rem' height='100%'></GridCuadrado>}
        <Grid container zIndex={20} width='100%' height='60%' mt={{xs:0,sm:8}}>
            <img src={imagen} alt={imagen} style={{width:'100%', height:'100%', objectFit:'cover', objectPosition: 'center center'}}/>
        </Grid>
      </Grid>

      <Grid container direction='column' width={{xs:'100%', sm:'50%'}} height='100%' p={4} gap={3} order={ isSmallScreen ? 1 : direccion==='izquierda' ? 1 : 0}>
        <TypographyTitulo color={{xs:`${theme.palette.secondary.main}`, sm:'black'}} textAlign={{xs:'center', sm:'start'}}>{titulo}</TypographyTitulo>
        <TypographyStyle  color={{xs:'#d5d5d5', sm:'black'}}>{texto}</TypographyStyle>
      </Grid>

    </Grid>
  )
}

export default PublicidadEmpresa





const GridCuadrado = styled(Grid)(({ theme }) => ({
    position:'absolute',
    backgroundColor: theme.palette.primary.main,
  }));


const TypographyTitulo = styled(Typography)(({ theme }) => ({
   fontFamily: theme.typography.h1.fontFamily,
   fontWeight: 800,
   fontSize: theme.typography.h1.fontSize
 }));


const TypographyStyle = styled(Typography)(({ theme }) => ({
   fontFamily: theme.typography.h5.fontFamily,
   fontWeight: 400,
   fontSize: theme.typography.h5.fontSize
}));
  