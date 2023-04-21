import { Grid, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';





const PublicidadEmpresa = ({direccion, imagen, titulo, texto}) => {
  return (
    <Grid container direction={{xs:'column', sm:'row'}} height='80vh' width='80%' backgroundColor='white'>
      
      <Grid container direction='column' width='40%' height='80%' alignItems='center'justifyContent='center' order={direccion==='izquierda' ? 0 : 1}>
        <GridCuadrado container width='20rem' height='100%'></GridCuadrado>
        <Grid container zIndex={20} width='100%' height='60%' mt={8} >
            <img src={imagen} alt={imagen} style={{width:'100%', height:'100%', objectFit:'cover', objectPosition: 'center center'}}/>
        </Grid>
      </Grid>

      <Grid container direction='column' width='50%' height='100%' p={4} gap={3} order={direccion==='izquierda' ? 1 : 0}>
        <TypographyTitulo>{titulo}</TypographyTitulo>
        <TypographyStyle>{texto}</TypographyStyle>
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
  