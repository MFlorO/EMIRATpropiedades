import { Grid, Typography } from "@mui/material"
import { InmuebleLayout } from "../../layout"
import { heightViews } from "../../layout/InmuebleLayout"
import MenuAdministracion from "./MenuAdministracion";
import { styled } from '@mui/material/styles';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DesignServicesIcon from '@mui/icons-material/DesignServices';



const Administracion = () => {
  return (
    <InmuebleLayout>
        <Grid container width='100%' height='max-content' minHeight='25rem' mt={`${heightViews}rem`} justifyContent='center' alignItems='center' gap={5}>
          <Typography variant="h1" textAlign='center'>ADMINISTRACIÓN Y GESTION DE INMUEBLES</Typography>
          <Grid container direction={{xs:'column', sm:'row'}} flexWrap='wrap' width='90%' height='max-content' gap={4} justifyContent='space-around'> 
            <MenuAdministracion icono={<CorporateFareIcon sx={{fontSize:'40px'}}/>} titulo={'Control minusioso de garantías'} />
            <MenuAdministracion icono={<AddBusinessIcon sx={{fontSize:'40px'}}/>} titulo={'Gestión de los inquilinos'} parrafo={'Nos encargamos de gestionar todo lo relacionado con el cobro, las incidencias que puedan surgir, las reparaciones y las obligaciones legales. Además, la selección de los inquilinos adecuados.'} />
            <MenuAdministracion icono={<AttachMoneyIcon sx={{fontSize:'40px'}}/>} titulo={'Comercialización del bien'} parrafo={'Llevaremos a cabo todas las acciones necesarias para perfeccionar el contrato de arrendamiento y lograr las condiciones que el propietario considera adecuadas. El acondicionamiento del inmueble, la selección de los inquilinos adecuados o la publicidad mediante fotos y vídeos.'} />
            <MenuAdministracion icono={<DesignServicesIcon sx={{fontSize:'40px'}}/>} titulo={'Servicios una vez finalizado el contrato de arrendamiento'} parrafo={'Llevaremos a cabo todas las acciones necesarias para perfeccionar el contrato de arrendamiento y Cuando se ha puesto fin a un contrato de arrendamiento, es necesario revisar la situación en la que se encuentra el inmueble para comprobar si se han producido algunos desperfectos. Nos encargaremos de ejecutar todas las acciones relacionadas con la salida de los inquilinos.'} />
          </Grid>
          <Grid>
          <Typography variant="h1" textAlign='center' mt={5} mb={3}>¿Cuáles son tus ventajas de nuestra administración?</Typography>
          <Grid container width='100%' alignContent='center' justifyContent='center'>
            <Grid container width='50%' direction='column' gap={4} textAlign='center'>
            <TypographyParrafo variant="p">Evita el estrés al propietario del inmueble por el proceso de arrendamiento. Todas las gestiones relevantes quedan a cargo del agente inmobiliario.</TypographyParrafo>
            <TypographyParrafo variant="p">La gestión se desarrolla de un modo más eficiente y se maximizan las ganancias.</TypographyParrafo>
            <TypographyParrafo variant="p">El proceso es gestionado por una persona que conoce a la perfección el mercado inmobiliario, aumentando la seguridad en los acuerdos y se evitan posibles fraudes.</TypographyParrafo>
            <TypographyParrafo variant="p">Permite un ahorro de dinero. Los propietarios que no cuentan con el respaldo de un administrador pueden verse obligados a abonar gastos judiciales y honorarios a abogados en caso de que surja algún conflicto.</TypographyParrafo>
            <TypographyParrafo variant="p">La vivienda siempre se encontrará en perfectas condiciones para que el propietario pueda arrendarla de nuevo.</TypographyParrafo>
            </Grid>
          </Grid>
          </Grid>
        </Grid>
    </InmuebleLayout>
  )
}

export default Administracion;



const TypographyParrafo = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontFamily: theme.typography.p.fontFamily,
  fontWeight: 400,
  fontSize: '14px',
  color: 'black',
}));
