import React from "react";
import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../utils/consts";

const Login = () => {
  return (
    <div className="auth__container">
      <form className="auth__form">
        <div className="auth__group">
          <label className="auth__label" for="email">
            Почта
          </label>
          <input
            className="auth__input"
            type="email"
            placeholder="Почта"
            id="email"
          />
        </div>
        <div className="auth__group">
          <label className="auth__label" for="password">
            Пароль
          </label>
          <input
            className="auth__input"
            type="password"
            placeholder="Пароль"
            id="password"
          />
        </div>
        <div className="auth__text-container">
          <p className="auth__text">
            У вас нет аккаунта?{" "}
            <Link to={REGISTRATION_ROUTE} className="auth__link">
              Зарегистрироваться
            </Link>
          </p>
        </div>
        <button type="submit" className="login-button">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
