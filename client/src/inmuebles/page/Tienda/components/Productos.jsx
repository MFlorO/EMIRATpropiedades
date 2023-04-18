import { Button, Grid, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import useInmuebles from "../../../Hook/useInmuebles";
import { IconosItems } from "../../../components";
import { styled } from '@mui/material/styles';





const Productos = () => {

  const navigate = useNavigate()

  const { inmuebleCopia } = useInmuebles()

  const cantidadInmuebles = inmuebleCopia?.length
  
  return (
    <>

    <Typography variant="h4" fontWeight={600}>  {cantidadInmuebles} Inmuebles totales</Typography>
      

    <Grid container direction='column' gap={2} mt={2} >
      {inmuebleCopia?.map( p => (
          <Grid container direction={{xs:'column', sm:'row'}} width='95%' height='18rem' key={p.id} justifyContent='space-between' backgroundColor='white'>

            <Grid container width={{xs:'90%', sm:'35%'}} height='100%' backgroundColor='red'> 
              <Link to={`/tienda/${p.id}`}><img src={p.imagen[0]} alt={p.imagen.indexOf()}  style={{width:'100%', height:'100%', objectFit:'cover'}} /></Link>
            </Grid>

            <Grid container direction={{xs:'column', sm:'row'}} width={{xs:'90%', sm:'60%'}} height='100%' >
              <Grid container width={{xs:'100%', sm:'70%'}} direction='column' justifyContent='space-around' >
              <Grid item>
              <TypographyPrecio>$ {p.precio} {p.moneda}</TypographyPrecio>
              <Typography variant='p' fontWeight={700}>{p.direccion}</Typography>
              </Grid>

              <Grid item>
                <IconosItems p={p} />
              </Grid>
              </Grid>

              <Grid item width={{xs:'100%', sm:'20%'}} alignSelf='end' p={2}> 
                <Button variant="contained" size="large" onClick={() => navigate(`/contacto?c=alquilar&id=${p.id}`)}>Contactar</Button>
              </Grid>
            </Grid>

           </Grid>
          )
        )
      }
    </Grid>
    

    </>
  )
}

export default Productos







const TypographyPrecio = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: theme.typography.h1.fontFamily,
  fontSize: '40px',
  fontWeight: 600,
}));
