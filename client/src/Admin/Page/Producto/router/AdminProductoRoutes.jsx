import { Navigate, Route, Routes } from "react-router-dom";
import { CrearProducto } from "../components";
import Productos from "../Productos";




const AdminProductoRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Productos />}/>
      <Route path="/crearproducto" element={<CrearProducto />}/>
      
      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/productos" />}/>
    </Routes>
  )
}

export default AdminProductoRoutes;