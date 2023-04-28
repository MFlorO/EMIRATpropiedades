import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayOut } from "../layout";
import { Dashboard, Usuarios, Perfil, AdminProductoRoutes, AdminCategoriaRoutes } from "../Page";


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<AdminLayOut />} />

      {/* ITEMS PRINCIPALES */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/productos/*" element={<AdminProductoRoutes />} />
      <Route path="/categorias/*" element={<AdminCategoriaRoutes />} />
      <Route path="/usuarios" element={<Usuarios />} />

      {/* ITEMS SECUNDARIOS */}
      <Route path="/perfil" element={<Perfil />} />

      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/" />} />
    </Routes>
  )
}

export default AdminRoutes;