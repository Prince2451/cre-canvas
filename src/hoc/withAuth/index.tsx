import React, { useEffect } from "react";
import useStore from "../../App/store";
import { IAppRouteObject } from "../../routes";

const withAuth = (
  WrappedComponent: React.FC<{
    isAuthenticated: boolean;
    isCheckingAuth: boolean;
    routes: IAppRouteObject[];
  }>,
  routes: IAppRouteObject[]
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
