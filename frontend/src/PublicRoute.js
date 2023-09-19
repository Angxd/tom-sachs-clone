import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const authReducer = useSelector((state) => state.authReducer) || {};

  const { isLoading, user } = authReducer;

  if (isLoading) return <h1>Loading...</h1>;

  if (!user) return children;

  return <Navigate to={user.role === "ADMIN" ? "/admin" : "/store"} />;
};

export default PublicRoute;
