import { Navigate, Route, Routes } from "react-router-dom";
import { CrearProducto } from "../components";
import Inmuebles from "../Inmuebles";




const AdminProductoRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Inmuebles />}/>
      <Route path="/inmueble" element={<CrearProducto />}/>
      
      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/inmuebles" />}/>
    </Routes>
  )
}

export default AdminProductoRoutes;