import { useState } from "react";
import { Route, useRoutes } from "react-router-dom";
import routes from "../containers/Auth/routerConfig";
import withAuth from "../hoc/withAuth";

import "./index.css";

const App: React.FC = withAuth(
  ({ isAuthenticated, isCheckingAuth, routes }) => {
    const element = useRoutes(routes);

    return <div>{element}</div>;
  },
  routes
);

export default App;
