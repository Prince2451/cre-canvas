import React from "react";
import useStore from "../../App/store";

const Auth = () => {
  const user = useStore((state) => state.user);

  return <div></div>;
};

export default Auth;
