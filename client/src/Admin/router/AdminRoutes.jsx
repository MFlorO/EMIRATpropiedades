import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayOut } from "../layout";
import { Dashboard, Perfil, AdminProductoRoutes, AdminCategoriaRoutes, AdminCuentasRoutes } from "../Page";


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<AdminLayOut />} />

      {/* ITEMS PRINCIPALES */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/inmuebles/*" element={<AdminProductoRoutes />} />
      <Route path="/categorias/*" element={<AdminCategoriaRoutes />} />
      <Route path="/cuentas/*" element={<AdminCuentasRoutes />} />

      {/* ITEMS SECUNDARIOS */}
      <Route path="/perfil" element={<Perfil />} />

      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/" />} />
    </Routes>
  )
}

export default AdminRoutes;