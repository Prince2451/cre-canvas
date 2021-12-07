import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import useStore from "../../App/store";
import { animated, useTransition } from "@react-spring/web";

const Auth: React.FC = () => {
  const user = useStore((state) => state.user);

  return (
    <div className="md:w-screen min-h-screen flex justify-center items-center">
      <div className="w-full md:w-11/12 md:max-w-4xl min-h-screen md:min-h-160 border rounded-md md:shadow flex justify-center md:items-stretch bg-white h-full md:h-auto items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
