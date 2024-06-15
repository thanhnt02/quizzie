import Welcome from "../pages/Welcome"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ProtectedRoutes from "../components/ProtectedRoutes"
import Dashboard from "../pages/Dashboard"

export const routes = [
  {
    path: "/",
    element: <Welcome/>
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "register",
    element: <Register/>
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard/>
      }
    ]
  }
]