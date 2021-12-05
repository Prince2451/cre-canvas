import React from "react";
import authRoutes from "../containers/Auth/routerConfig";

export interface IRoute {
  path: string;
  element?: React.FC | React.ComponentClass;
  children?: Array<IRoute>;
  index?: boolean;
}

const routes: { public: IRoute[]; private: IRoute[] } = {
  public: [...authRoutes],
  private: [],
};

export default routes;
