import { Component, ComponentElement, ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";

import react from "@vitejs/plugin-react";
import { useSelector } from "react-redux";
import useAuth from "../../../hooks/useAuth";

const ProtectedSignInUp = ({ children }: { children: any }) => {
  const { isAuthenticated } = useAuth();
  console.log("useAuth: :: :", isAuthenticated);

  let location = useLocation();

  console.log("childdddd", children);
  console.log("protected sign in is auth: ", isAuthenticated);

  // If you have already logged in => Navigate to Home page
  if (isAuthenticated) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedSignInUp;
