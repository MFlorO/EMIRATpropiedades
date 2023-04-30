import { Navigate, Route, Routes } from "react-router-dom";
import Categorias from "../Categorias";



const AdminCategoriaRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Categorias />}/>

      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/categoria" />}/>
    </Routes>
  )
}

export default AdminCategoriaRoutes;