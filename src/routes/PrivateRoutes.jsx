import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/signin" state={location.pathname} replace></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
