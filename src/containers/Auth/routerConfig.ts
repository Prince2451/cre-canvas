import Auth from ".";
import { IRoute } from "../../routes";
import Login from "./components/Login";
import Register from "./components/Register";

const routes: IRoute[] = [
  {
    path: "/auth",
    element: Auth,
    children: [
      {
        path: "/login",
        element: Login,
        index: true,
      },
      {
        path: "/register",
        element: Register,
      },
    ],
  },
];

export default routes;
