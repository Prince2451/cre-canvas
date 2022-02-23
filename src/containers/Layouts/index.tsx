import React, { ReactNode } from "react";
import { RouteObject } from "react-router-dom";
import { Login } from "../../animations";
import useStore from "../../App/store";

const Layout: React.FC<{
  routes: RouteObject[];
}> = ({ children }) => {
  const navigatingAnimation = useStore(
    (selector) => selector.navigatingAnimation
  );

  let animation: ReactNode = null;
  if (navigatingAnimation.animationDetails) {
    switch (navigatingAnimation.type) {
      case "login":
        animation = <Login {...navigatingAnimation.animationDetails} />;
        break;
      default:
        animation = null;
        break;
    }
  }

  return (
    <div>
      <div className="bg-primary-100 min-h-screen min-w-full p-2">
        {children}
      </div>
      <div>{animation}</div>
    </div>
  );
};

export default Layout;
