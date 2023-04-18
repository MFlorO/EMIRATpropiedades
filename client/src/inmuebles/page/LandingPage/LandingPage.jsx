import { InmuebleLayout } from "../../layout";
import { Banner, Menu, Carousel, Banner2, BannerAdministracion } from "./components";


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
        <Carousel elementos={imagen} />  
        <Banner2 />
        <BannerAdministracion />
      </InmuebleLayout>
    </>
  );
};

export default LandingPage;
