import { Component, ComponentElement, ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import react from "@vitejs/plugin-react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = true;
  console.log("useAuth: :: :", isAuthenticated);

  console.log("childdddd", children);

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
