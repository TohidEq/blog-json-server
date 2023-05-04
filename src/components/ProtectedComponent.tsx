import { Component, HtmlHTMLAttributes } from "react";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedComponent = ({ children }: any) => {
  const { isAuthenticated, isLoading } = {isAuthenticated:true,isLoading:false}
  const location = useLocation();

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedComponent;
