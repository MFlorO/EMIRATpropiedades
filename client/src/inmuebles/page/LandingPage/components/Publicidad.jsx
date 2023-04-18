import { Button, Grid, IconButton, Typography, useTheme } from "@mui/material"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from "react-router-dom";


const imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCukprG1CL0fwu5f1XI1OKggmoiHsb48R2gw&usqp=CAU"

const Publicidad = ({lugar, titulo, textoBoton, link}) => {

    const navigate = useNavigate()
    const theme = useTheme()

  return (
    <>
    {lugar === 'centro' &&
    <Grid container direction='column' width='50%' justifyContent='center' alignItems='center' textAlign='center' gap={1}>
        <Typography variant="h2" fontStyle='italic' color='primary'>Nuestro objetivo es proporcionar un servicio personal de calidad desde la etapa inicial hasta el final</Typography>
        <Typography variant='p' color='secondary'>Conocenos <IconButton onClick={() => navigate(link)}><ArrowRightAltIcon color="secondary"/></IconButton></Typography>
    </Grid> 
   }
   { lugar !== 'centro' &&
    <Grid container direction={{xs:'column', sm:'row'}} width='100%' justifyContent='space-around' alignItems='center' backgroundColor={theme.palette.primary.main}>
        <Grid item xs={12} sm={4} order={ lugar === 'izquierda' ? 1 : 0}>
           <img src={imagen} alt={imagen} style={{width:'100%', height:'100%', objectFit:'contain'}} />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Typography variant='h2' color='white'>{titulo}</Typography>
            <Typography variant='p' color='white' fontWeight={200} fontSize='12px' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsum, libero autem, earum, temporibus voluptas voluptatem similique officiis unde aut corrupti fuga? Aspernatur eum doloremque, incidunt ipsum nemo est fugiat!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt porro, nemo iste quia quaerat laudantium quod reiciendis, similique sed modi velit mollitia impedit labore voluptas, officia veniam asperiores officiis.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam minima voluptates mollitia placeat ab, quae expedita dolore repellat sapiente libero nulla fugit, laborum earum, dicta dignissimos. Quaerat odio dignissimos voluptas.
            </Typography>
            <Grid mt={2}>
            <IconButton onClick={() => navigate(link)}><Typography variant='p' color='secondary'>{textoBoton}</Typography><ArrowRightAltIcon color="secondary"/></IconButton>
            </Grid>
        </Grid>
        
    </Grid>
   }
   </>
  )
}

export default Publicidad