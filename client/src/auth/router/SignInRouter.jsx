import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "../view";


const SignInRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<SignIn />} />
      <Route path="/" element={<Navigate to="/ingreso/panel/" />} />
    </Routes>
  )
}

export default SignInRouter;