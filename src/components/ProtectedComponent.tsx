import { Component, HtmlHTMLAttributes } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedComponent = ({ children }: any) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedComponent;
