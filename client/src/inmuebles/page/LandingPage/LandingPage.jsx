import { Grid } from "@mui/material";
import { InmuebleLayout } from "../../layout";
import { Banner, Menu, Carousel, BannerIconos, Publicidad } from "./components";
import { Footer, NavBar } from "../../components";


const LandingPage = () => {

  return (
    <Grid container width='100%' minHeight='20rem' height='max-content'>
      <NavBar />
      <Banner />
      <Menu />
        <Grid container direction='column' width='100%' alignItems='center' justifyContent='space-around' mt={{xs:'', sm:25}} gap={15}>
          <Publicidad lugar='centro' link={'/nosotros'}/>
          <Publicidad lugar='izquierda' titulo='Servicio Innovador' textoBoton='Ver nuestros inmuebles' link={'/tienda'} 
          texto={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsum, libero autem, earum, temporibus voluptas voluptatem similique officiis unde aut corrupti fuga?. Aspernatur eum doloremque, incidunt ipsum nemo est fugiat!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt porro, nemo iste quia quaerat laudantium quod reiciendis, similique sed modi velit mollitia impedit labore voluptas, officia veniam asperiores officiis. orem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam minima voluptates mollitia placeat ab, quae expedita dolore repellat sapiente libero nfugit, laborum earum, dicta dignissimos. Quaerat odio dignissimos voluptas"}
          />
          <Carousel />  
          <Publicidad lugar='derecha' titulo='Administración' textoBoton='Nosotros te administramos tu propiedad' link={'/administracion'}
          texto={"Abarcan una amplia gama de soluciones para el propietario o desarrollador de inmuebles, así como para los ocupantes de los mismos."}
          />
          <BannerIconos />
        </Grid>

      <Footer />
    </Grid>
  );
};

export default LandingPage;
