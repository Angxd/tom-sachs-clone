import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, admin = false }) => {
  const authReducer = useSelector((state) => state.authReducer) || {};

  const { isLoading, user } = authReducer;

  if (isLoading) return <h1>Loading...</h1>;

  if (admin && user.role === "ADMIN") return children;
  else if (!admin && user) return children;

  return <Navigate to="/login" />;
};

export default PrivateRoute;
