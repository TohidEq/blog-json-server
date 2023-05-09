import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoutes3 = ({ path, children }: any) => {
  const auth = useSelector(
    (state: { isAuthenticated: boolean }) => state.isAuthenticated
  );

  return auth ? (
    <Route
      path={ path}
      element={
        children
      }
    />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoutes3;
