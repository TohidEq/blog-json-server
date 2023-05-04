import { Component, ComponentElement } from "react";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoute = ({ children }: any) => {
  const { isAuthenticated, isLoading } = {isAuthenticated:true,isLoading:false}
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
