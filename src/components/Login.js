import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HOME_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const Login = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = (e) => {
    e.preventDefault();
    user.setIsAuth(true);
    navigate(HOME_ROUTE);
  };

  return (
    <div className="auth__container">
      <form className="auth__form">
        <div className="auth__group">
          <label className="auth__label" htmlFor="email">
            Почта
          </label>
          <input
            className="auth__input"
            type="email"
            placeholder="Почта"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="auth__group">
          <label className="auth__label" htmlFor="password">
            Пароль
          </label>
          <input
            className="auth__input"
            type="password"
            placeholder="Пароль"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <button onClick={click} type="submit" className="login-button">
          Войти
        </button>
      </form>
    </div>
  );
});

export default Login;
