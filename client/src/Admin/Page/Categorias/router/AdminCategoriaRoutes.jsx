import { Navigate, Route, Routes } from "react-router-dom";
import { CrearCategoria } from "../components";
import Categorias from "../Categorias";



const AdminCategoriaRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Categorias />}/>
      <Route path="/crearcategoria" element={<CrearCategoria />}/>

      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/categoria" />}/>
    </Routes>
  )
}

export default AdminCategoriaRoutes;