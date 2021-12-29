import React from "react";
import authRoutes from "../containers/Auth/routerConfig";

export interface IAppRouteObject {
  path: string;
  element: React.FC;
  index?: boolean;
  caseSensitive?: boolean;
  transition?: boolean;
  children?: Array<IAppRouteObject>;
}

const routes: { public: IAppRouteObject[]; private: IAppRouteObject[] } = {
  public: [...authRoutes],
  private: [],
};

export default routes;
