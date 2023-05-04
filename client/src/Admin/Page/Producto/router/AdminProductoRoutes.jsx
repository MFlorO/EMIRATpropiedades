import { Navigate, Route, Routes } from "react-router-dom";
import { CrearInmueble } from "../components";
import Inmuebles from "../Inmuebles";




const AdminProductoRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Inmuebles />}/>
      <Route path="/inmueble" element={<CrearInmueble />}/>
      
      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/inmuebles" />}/>
    </Routes>
  )
}

export default AdminProductoRoutes;