import { Component, ComponentElement, ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import react from "@vitejs/plugin-react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useSelector(
    (state: { isAuthenticated: boolean }) => state.isAuthenticated
  );
  console.log("useAuth: :: :", isAuthenticated);

  let location = useLocation();

  console.log("childdddd", children);

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
