import React from "react";
import Login from "../components/Login";
import "../assets/style/Auth.css";
import Registration from "../components/Registration";
import { LOGIN_ROUTE } from "../utils/consts";
import { useLocation } from "react-router-dom";

function AuthPage() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <>
      <div className="auth">{isLogin ? <Login /> : <Registration />}</div>
    </>
  );
}

export default AuthPage;
