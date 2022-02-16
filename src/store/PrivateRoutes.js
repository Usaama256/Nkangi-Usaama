import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const [Admin, SetAdmin] = useState(false);

  SetAdmin(false);
  return Admin ? children : <Navigate to="/" />;
};

export default PrivateRoutes;
