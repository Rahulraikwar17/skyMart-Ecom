import React from "react";
import { Outlet } from "react-router";
import AuthBranding from "../components/AuthBranding";

const AuthLayout = () => {
  return (
    <div className="flex bg-black">
      <AuthBranding />
      <Outlet />
    </div>
  );
}; 

export default AuthLayout;
