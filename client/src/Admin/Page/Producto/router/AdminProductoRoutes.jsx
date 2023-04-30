import { Navigate, Route, Routes } from "react-router-dom";
import { CrearProducto } from "../components";
import Productos from "../Productos";




const AdminProductoRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Productos />}/>
      <Route path="/inmueble" element={<CrearProducto />}/>
      
      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/inmuebles" />}/>
    </Routes>
  )
}

export default AdminProductoRoutes;