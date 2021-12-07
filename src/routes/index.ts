import React from "react";
import { RouteObject } from "react-router-dom";
import authRoutes from "../containers/Auth/routerConfig";

const routes: { public: RouteObject[]; private: RouteObject[] } = {
  public: [...authRoutes],
  private: [],
};

export default routes;
