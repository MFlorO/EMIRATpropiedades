import { Navigate, Route, Routes } from "react-router-dom";
import Perfil from "../Perfil";
import { CambiarContraseña } from "../components";



const AdminPerfilRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Perfil />}/>
      <Route path="/cambiarcontraseña" element={<CambiarContraseña />}/>
      
      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/cuentas" />}/>
    </Routes>
  )
}

export default AdminPerfilRoutes;