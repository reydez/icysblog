import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
