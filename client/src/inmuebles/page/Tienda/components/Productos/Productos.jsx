import { Button, Grid, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import { useInmuebles,useQueryParams } from "../../../../Hook";
import { IconosItems } from "../../../../components";
import { styled } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
import { Carousel } from ".";




const Productos = () => {
  
  
  const navigate = useNavigate()

  const { inmueble, status, ok } = useInmuebles()

  const { c,s } = useQueryParams()

  const cantidadInmuebles = inmueble?.length


  
  return (
    <>

    <Typography variant="h4" fontWeight={600}> {!ok ?  status : cantidadInmuebles + " Inmuebles totales"}</Typography>


    <Grid container direction='column' gap={4} mt={2} >
      { s && <Grid><Button variant="contained" onClick={() => navigate(`/tienda?c=${c}`)}>{s}<ClearIcon size='small'/></Button></Grid>}
      { ok && inmueble?.map( p => (
          <Grid container key={p.id} direction={{xs:'column', sm:'row'}} width='90%' minHeight='15rem' height={{xs:"", sm:"15rem"}} justifyContent={{xs:'center', sm:'space-between'}} alignItems='center' backgroundColor='white' boxShadow={{xs:'none', sm:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}}>

            <Grid container width={{xs:'100%', sm:'45%'}} height={{xs:'15rem', sm:'100%'}} justifyContent={{xs:'center', sm:'center'}}> 
              <Carousel p={p}/>
            </Grid>

            <Grid container direction={{xs:'column', sm:'row'}} width={{xs:'90%', sm:'55%'}} height='100%'>
              <Grid container width={{xs:'100%', sm:'60%'}} direction='column' p={2}>

              <Grid item xs={12} sm={5}>
              <TypographyPrecio>$ {p.precio} {p.moneda}</TypographyPrecio>
              <Typography variant='p' fontWeight={700}>{p.direccion}</Typography>
              </Grid>

              <Grid item xs={8} sm={5}> 
                <IconosItems p={p} />
              </Grid>
              </Grid>

              <Grid item width={{xs:'100%', sm:'30%'}} alignSelf='end' p={2} textAlign='center'> 
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
  fontWeight: 600
}));
