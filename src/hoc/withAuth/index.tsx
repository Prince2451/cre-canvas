import React, { useEffect } from "react";
import { useUser } from "../../containers/Auth/queryHooks";
import { IAppRouteObject } from "../../routes";
import { default as globalRoutes } from "../../routes";

const withAuth = (
  WrappedComponent: React.FC<{
    isAuthenticated: boolean;
    isCheckingAuth: boolean;
    routes: IAppRouteObject[];
  }>,
  routes: typeof globalRoutes
): React.FC => {
  return ({ ...props }) => {
    const { user, isAuthenticated, isLoading, isFetched } = useUser();

    return isLoading && !isFetched ? null : (
      <WrappedComponent
        {...props}
        isAuthenticated={!!user}
        isCheckingAuth={false}
        routes={routes[isAuthenticated ? "private" : "public"]}
      />
    );
  };
};

export default withAuth;
