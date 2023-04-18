import { Grid } from "@mui/material";
import { InmuebleLayout } from "../../layout";
import { Banner, Menu, Carousel, Banner2, BannerAdministracion, Publicidad } from "./components";


const LandingPage = () => {

  const imagen = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCukprG1CL0fwu5f1XI1OKggmoiHsb48R2gw&usqp=CAU", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCukprG1CL0fwu5f1XI1OKggmoiHsb48R2gw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCukprG1CL0fwu5f1XI1OKggmoiHsb48R2gw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMLRmTKnrOLmTDNv1tbZvWpj0LnqSj5fazA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMLRmTKnrOLmTDNv1tbZvWpj0LnqSj5fazA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCukprG1CL0fwu5f1XI1OKggmoiHsb48R2gw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCukprG1CL0fwu5f1XI1OKggmoiHsb48R2gw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCukprG1CL0fwu5f1XI1OKggmoiHsb48R2gw&usqp=CAU"
     ]

  return (
    <>
      <Banner />
      <Menu />
      <InmuebleLayout>
        <Grid container direction='column' width='100%' alignItems='center' justifyContent='space-around' mt={{xs:'', sm:25}} gap={15}>
          <Publicidad lugar='centro' link={'/nosotros'}/>
          <Publicidad lugar='izquierda' titulo='Servicio Innovador' textoBoton='Ver nuestros inmuebles' link={'/tienda'}/>
          <Carousel elementos={imagen} />  
          <Publicidad lugar='derecha' titulo='Administración' textoBoton='Nosotros te administramos tu propiedad' link={'/administracion'}/>
          <Banner2 />
        </Grid>
      </InmuebleLayout>
    </>
  );
};

export default LandingPage;
