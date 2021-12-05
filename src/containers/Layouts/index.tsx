import React from "react";
import { IRoute } from "../../routes";

const Layout: React.FC<{
  routes: IRoute[];
}> = ({ children }) => {
  return <div className="p-4 bg-primary-100">{children}</div>;
};

export default Layout;
