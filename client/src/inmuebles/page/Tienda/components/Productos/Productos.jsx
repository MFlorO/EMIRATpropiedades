import { Button, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useInmuebles,useQueryParams } from "../../../../Hook";
import { IconosItems, Loading } from "../../../../components";
import { styled } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
import { Carousel } from ".";




const Productos = () => {
  
  
  const navigate = useNavigate()

  const { inmuebles, status, ok, cantidadTotal } = useInmuebles()

  const { c, s } = useQueryParams()

  if (cantidadTotal === 0) return <Loading />
  
  return (
    <>

    <Typography variant="h4" fontWeight={600}> {!ok ?  status : cantidadTotal + " Inmuebles totales"}</Typography>


    <Grid container direction='column' gap={4} mt={2} >
      
      { s && <Grid>
                    <Button variant="contained" onClick={() => (c !==undefined && c!=='todos') ? navigate(`/tienda?c=${c}&paginaActual=1&items=5`) : navigate(`/tienda?paginaActual=1&items=5`)}>{s}
                      <ClearIcon size='small'/>
                    </Button>
             </Grid>
      }

      { ok && inmuebles?.map( p => (
          <Grid container key={p.id} direction={{xs:'column', sm:'row'}} width='90%' minHeight={{xs:'15rem', sm:'15rem'}} height={{xs:"max-content", sm:"15rem"}} justifyContent={{xs:'center', sm:'space-between'}} 
          alignItems='center' backgroundColor='white' boxShadow={{xs:'none', sm:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}}>

            <Grid container width={{xs:'100%', sm:'45%'}} height={{xs:'15rem', sm:'100%'}} justifyContent={{xs:'center', sm:'center'}}> 
              <Carousel p={p} cantidadImagDesktop={1}/>
            </Grid>

            <Grid container direction='column' width={{xs:'90%', sm:'55%'}} height='100%'>
              <Grid container width={{xs:'100%', sm:'100%'}} direction='column' p={2} gap={{xs:2,sm:0}}>

              <Grid container width='100%'>
              <TypographyPrecio>$ {p.precio} {p.moneda} {p.id}</TypographyPrecio>
              <Typography variant='p' fontWeight={700}>{p.direccion}</Typography>
              </Grid>

              <Grid container direction={{xs:'column', sm:'row'}} width='100%' gap={{xs:2,sm:0}}> 
                <Grid item xs={12} sm={8}>
                  <IconosItems p={p} />
                </Grid>
                <Grid item xs={12} sm={4} alignSelf={{xs:'center', sm:'end'}}>
                  <Button variant="contained" size="large" onClick={() => navigate(`/contacto?c=alquilar&id=${p.id}`)}>Contactar</Button>
                </Grid>
              </Grid>
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
