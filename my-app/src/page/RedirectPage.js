import React from "react";
import { Navigate } from "react-router-dom";

const RedirectPage = () => {
  const isLogin = localStorage.getItem("loginState");
  console.log(isLogin);
  return <div>{!isLogin && <Navigate to="/login"></Navigate>}</div>;
};

export default RedirectPage;
