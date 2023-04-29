import { Navigate, Route, Routes } from "react-router-dom";
import { CrearCuenta } from "../components";
import Productos from "../Productos";




const AdminProductoRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Productos />}/>
      <Route path="/crearcuenta" element={<crearCuenta />}/>
      
      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/productos" />}/>
    </Routes>
  )
}

export default AdminProductoRoutes;