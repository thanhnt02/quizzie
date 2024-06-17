import Welcome from "../pages/Welcome"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ProtectedRoutes from "../components/ProtectedRoutes"
import Home from "../pages/Home"
import Topic from "../pages/Topic"
import Answer from "../pages/Answer"
import LayoutDefault from "../components/LayoutDefault"
import Quiz from "../pages/Quiz"
import GradeScreen from "../components/GradeScreen"

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
        element: <LayoutDefault />,
        children: [
          {
            path: "home",
            element: <Home/>
          },
          {
            path: "topic",
            element: <Topic />
          },
          {
            path: "quiz/:id",
            element: <Quiz />
          },
          {
            path: "answer",
            element: <Answer />,
          },
          {
            path: "answer/:id",
            element: <GradeScreen/>
          }
        ]
      }
    ]
  }
]