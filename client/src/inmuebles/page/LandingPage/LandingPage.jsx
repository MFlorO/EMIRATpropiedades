import { InmuebleLayout } from "../../layout";
import { Banner, Menu, Carousel } from "./components";


const LandingPage = () => {
  return (
    <>
      <Banner />
      <Menu />
      <InmuebleLayout>
        <Carousel />   
      </InmuebleLayout>
    </>
  );
};

export default LandingPage;
