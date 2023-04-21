import { Grid } from "@mui/material"
import { InmuebleLayout } from "../../layout"
import PublicidadEmpresa from "./PublicidadEmpresa"
import { heightViews } from "../../layout/InmuebleLayout"

import imagen from "../../../../public/img/empresa/fotoEmpresa.jpg"
import imagen2 from "../../../../public/img/empresa/fotoEmpresa2.jpg"


const Empresa = () => {
  return (
    <InmuebleLayout>
      <Grid container direction='column' height='max-content' width='100%' justifyContent='space-around' alignItems='center' mt={`${heightViews}rem`} gap={3}>
        <PublicidadEmpresa direccion={'izquierda'} imagen={imagen} titulo={"Visión"} texto={"Constantemente buscamos que JB Srur sea una empresa líder en el mercado desarrollista como así también inmobiliario y en donde nuestra empresa pueda ser reconocida por la capacidad de desarrollo de emprendimientos, la comercialización, como así también el servicio de asesoramiento integral hacia nuestros clientes."}/>
        <PublicidadEmpresa direccion={'derecha'} imagen={imagen2} titulo={"Valores"} texto={"En JB SRUR valoramos y respetamos plenamente la importancia de cada inversión, conocemos en detalle el sector inmobiliario y orientamos todas las gestiones al asesoramiento y acompañamiento personalizado de nuestros clientes. Nuestra inmobiliaria es sinónimo de tradición y permanencia. Brindamos un servicio que se adecua permanentemente a las nuevas tendencias y modalidades del negocio inmobiliario, siempre manteniendo los principios que conforman nuestra identidad empresaria. La cultura empresarial que nos sostiene e inspira está basada en los valores de integridad, profesionalismo, confidencialidad, trabajo en equipo y mejora continua."}/>
      </Grid>
    </InmuebleLayout>
  )
}

export default Empresa



