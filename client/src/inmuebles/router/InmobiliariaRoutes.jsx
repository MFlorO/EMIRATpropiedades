import { Navigate, Route, Routes } from "react-router-dom";
import { Detalle, LandingPage, Tienda, Contacto, Administracion, Empresa } from "../page";
import InmuebleLayout from "../layout/InmuebleLayout";




const InmobiliariaRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<InmuebleLayout />} />

      <Route path="/" element={<LandingPage />} />
      <Route path="/tienda/detalle/:id/:direccion/*" element={<Detalle /> } />
      <Route path="/tienda/:ordenar?" element={<Tienda />} />
      <Route path="/empresa" element={<Empresa />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/administracion" element={<Administracion />} />

      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default InmobiliariaRoutes;