import React, { useEffect } from "react";
import { RouteObject } from "react-router-dom";
import useStore from "../../App/store";

const withAuth = (
  WrappedComponent: React.FC<{
    isAuthenticated: boolean;
    isCheckingAuth: boolean;
    routes: RouteObject[];
  }>,
  routes: RouteObject[]
): React.FC => {
  return ({ ...props }) => {
    const user = useStore((state) => state.user);

    useEffect(() => {
      // handle authentication
    }, [user]);

    return (
      <WrappedComponent
        {...props}
        isAuthenticated={!!user}
        isCheckingAuth={false}
        routes={routes}
      />
    );
  };
};

export default withAuth;
