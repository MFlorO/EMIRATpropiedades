import { Route, Routes } from "react-router-dom";
import { InmobiliariaRoutes } from "../inmuebles/router";



const AppRouterPrincipal = () => {

  return (
    <Routes>
      <Route path="/*" element={<InmobiliariaRoutes />} />
    </Routes>
  );
};

export default AppRouterPrincipal;
