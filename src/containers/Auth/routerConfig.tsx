import { RouteObject } from "react-router-dom";
import Auth from ".";
import Login from "./components/Login";
import Register from "./components/Register";

const routes: RouteObject[] = [
  {
    path: "/auth/",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
        index: true,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default routes;
