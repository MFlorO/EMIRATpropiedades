import { Grid } from "@mui/material";
import { Banner, Menu, Carousel, BannerIconos, Publicidad } from "./components";
import { Footer, NavBar } from "../../components";
import imagen1 from "../../../../public/img/publicidadLandingPage/publicidad1.jpg"
import imagen2 from "../../../../public/img/publicidadLandingPage/publicidad2.jpg"



const LandingPage = () => {

  return (
    <Grid container width='100%' minHeight='20rem' height='max-content' backgroundColor='#F8F8F8'>
      <NavBar />
      <Banner />
      <Menu />
        <Grid container direction='column' width='100%' height={{xs:'400vh', sm:'350vh'}} alignItems='center' justifyContent='space-around' mt={{xs:10, sm:20}}>
          <Publicidad lugar='centro' link={'/empresa'}/>
          <Publicidad lugar='izquierda' imagen={imagen2} titulo='Servicio Innovador' textoBoton='Ver nuestros inmuebles' link={'/tienda'} 
          texto={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsum, libero autem, earum, temporibus voluptas voluptatem similique officiis unde aut corrupti fuga?. Aspernatur eum doloremque, incidunt ipsum nemo est fugiat!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt porro, nemo iste quia quaerat laudantium quod reiciendis, similique sed modi velit mollitia impedit labore voluptas, officia veniam asperiores officiis. orem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam minima voluptates mollitia placeat ab, quae expedita dolore repellat sapiente libero nfugit, laborum earum, dicta dignissimos. Quaerat odio dignissimos voluptas"}
          />
          <Carousel />  
          <Publicidad lugar='derecha' imagen={imagen1} titulo='Administración' textoBoton='Nosotros te administramos tu propiedad' link={'/administracion'}
          texto={"Abarcan una amplia gama de soluciones para el propietario o desarrollador de inmuebles, así como para los ocupantes de los mismos."}
          />
          <BannerIconos />
        </Grid>

      <Footer />
    </Grid>
  );
};

export default LandingPage;
