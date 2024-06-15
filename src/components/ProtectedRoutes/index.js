import { Navigate, Outlet } from "react-router-dom"
import { getCookie } from "../../helpers/cookie"

function ProtectedRoutes() {
  const isLogin = getCookie("token");
  return (
    <>
      {isLogin ? (
        <Outlet/>
      ) : (
        <Navigate to="/"/>
      )}
    </>
  )
}

export default ProtectedRoutes