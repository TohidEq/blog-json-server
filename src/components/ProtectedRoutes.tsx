import { Component, ComponentElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }: ReactElement<any, any>) => {
  var { isAuthenticated, isLoading } = useAuth();

  const location = useLocation();
  console.log("protected routes *");

  if (isLoading) {
    return <div>...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
