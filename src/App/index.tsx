import { useTransition } from "@react-spring/web";
import { useState } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import routes from "../containers/Auth/routerConfig";
import Layout from "../containers/Layouts";
import withAuth from "../hoc/withAuth";
import { IAppRouteObject } from "../routes";

import "./index.css";

const App: React.FC = withAuth(
  ({ isAuthenticated, isCheckingAuth, routes }) => {
    function createRoutes(currRoutes: IAppRouteObject[]) {
      const routesCom = currRoutes.map((ele) => (
        <Route key={ele.path} {...ele} element={<ele.element />}>
          {ele.children ? createRoutes(ele.children) : null}
        </Route>
      ));
      return routesCom;
    }

    return (
      <div>
        <Layout routes={routes}>
          <Routes>{createRoutes(routes)}</Routes>
        </Layout>
      </div>
    );
  },
  routes
);

export default App;
