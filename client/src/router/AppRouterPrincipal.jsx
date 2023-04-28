import { Route, Routes } from "react-router-dom";
import { InmobiliariaRoutes } from "../inmuebles/router";
import { SignInRouter } from "../auth";



const AppRouterPrincipal = () => {

  return (
    <Routes>
      <Route path="/*" element={<InmobiliariaRoutes />} />
      <Route path="/ingreso/*" element={<SignInRouter />} />
    </Routes>
  );
};

export default AppRouterPrincipal;
