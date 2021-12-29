import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../containers/Auth/queryHooks";
import { IAppRouteObject } from "../../routes";
import { default as globalRoutes } from "../../routes";
import { redirectPath } from "../../utils/helpers";

const withAuth = (
  WrappedComponent: React.FC<{
    isAuthenticated: boolean;
    routes: IAppRouteObject[];
  }>,
  routes: typeof globalRoutes
): React.FC => {
  return ({ ...props }) => {
    const { user, isAuthenticated, isLoading, isFetched } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
      if (isFetched) {
        navigate(redirectPath(isAuthenticated), { replace: true });
      }
    }, [isAuthenticated, isFetched]);

    return isLoading && !isFetched ? null : (
      <WrappedComponent
        {...props}
        isAuthenticated={!!user}
        routes={routes[isAuthenticated ? "private" : "public"]}
      />
    );
  };
};

export default withAuth;
