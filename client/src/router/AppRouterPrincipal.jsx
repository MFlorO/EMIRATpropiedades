import { Route, Routes } from "react-router-dom";
import { InmobiliariaRoutes } from "../inmuebles/router";
import { SignInRouter } from "../auth";
import AdminRoutes from "../Admin/router/AdminRoutes";



const AppRouterPrincipal = () => {

  return (
    <Routes>
      <Route path="/*" element={<InmobiliariaRoutes />} />
      <Route path="/ingreso/*" element={<SignInRouter />} />
      <Route path="/dashboard/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
};

export default AppRouterPrincipal;
