import React from "react";
import Login from "../components/Login";
import "../assets/style/Auth.css";

function AuthPage() {
  return (
    <>
      <div className="auth">
        <Login />
      </div>
    </>
  );
}

export default AuthPage;
