import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayOut } from "../layout";
import { Dashboard, AdminProductoRoutes, AdminCategoriaRoutes, AdminCuentasRoutes, AdminPerfilRoutes } from "../Page";
import { useMemo } from "react";
import { useSelector } from "react-redux";


const AdminRoutes = () => {

  const { isAdmin } = useSelector( state => state.auth )

  const admin = useMemo( () => isAdmin === true , [isAdmin])

  return (
    <Routes>
      <Route path="/*" element={<AdminLayOut />} />

      {/* ITEMS PRINCIPALES */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/inmuebles/*" element={<AdminProductoRoutes />} />
      <Route path="/categorias/*" element={<AdminCategoriaRoutes />} />

      {/* SOLO PUEDE INGRESAR A ESTA RUTA EL AMINISTRADOR */}
      { admin && <Route path="/cuentas/*" element={<AdminCuentasRoutes />} />}

      {/* ITEMS SECUNDARIOS */}
      <Route path="/perfil/*" element={<AdminPerfilRoutes />} />

      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/" />} />
    </Routes>
  )
}

export default AdminRoutes;