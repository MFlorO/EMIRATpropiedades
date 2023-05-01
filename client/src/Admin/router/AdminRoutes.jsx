import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayOut } from "../layout";
import { Dashboard, AdminProductoRoutes, AdminCategoriaRoutes, AdminCuentasRoutes, AdminPerfilRoutes } from "../Page";


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
      <Route path="/perfil/*" element={<AdminPerfilRoutes />} />

      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/" />} />
    </Routes>
  )
}

export default AdminRoutes;