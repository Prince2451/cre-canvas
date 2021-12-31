import React from "react";
import { RouteObject } from "react-router-dom";

const Layout: React.FC<{
  routes: RouteObject[];
}> = ({ children }) => {
  return (
    <div className="bg-primary-100 min-h-screen min-w-full p-2">{children}</div>
  );
};

export default Layout;
