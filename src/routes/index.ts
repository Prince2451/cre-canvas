import React from "react";
import authRoutes from "../modules/Auth/routerConfig";
import documentRoutes from "../modules/Documents/routerConfig";
import canvasRoutes from "../modules/Canvas/routerConfig";

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
  private: [...documentRoutes, ...canvasRoutes],
};

export default routes;
