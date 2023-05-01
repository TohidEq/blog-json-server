import { useAuthenticationStatus } from "@nhost/react";
import { Component, HtmlHTMLAttributes } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedComponent = ({ children }: any) => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const location = useLocation();

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedComponent;
