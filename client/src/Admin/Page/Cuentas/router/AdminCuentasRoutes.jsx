import { Navigate, Route, Routes } from "react-router-dom";
import Cuentas from "../Cuentas";
import { CrearCuenta } from "../components";



const AdminCuentasRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Cuentas />}/>
      <Route path="/crearcuenta" element={<CrearCuenta />}/>
      
      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/cuentas" />}/>
    </Routes>
  )
}

export default AdminCuentasRoutes;