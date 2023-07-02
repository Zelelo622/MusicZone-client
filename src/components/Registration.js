import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "..";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";

const Registration = observer(() => {
  const { user } = useContext(Context);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [nick, setNick] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = () => {
    user.setIsAuth(true);
  };

  return (
    <div className="auth__container">
      <form className="auth__form">
        <div className="auth__group">
          <label className="auth__label" for="name">
            Имя
          </label>
          <input
            className="auth__input"
            type="text"
            placeholder="Имя"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="auth__group">
          <label className="auth__label" for="surname">
            Фамилия
          </label>
          <input
            className="auth__input"
            type="text"
            placeholder="Фамилия"
            id="surname"
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="auth__group">
          <label className="auth__label" for="nick">
            Никнейм
          </label>
          <input
            className="auth__input"
            type="text"
            placeholder="Никнейм"
            id="nick"
            onChange={(e) => setNick(e.target.value)}
          />
        </div>
        <div className="auth__group">
          <label className="auth__label" for="phone">
            Телефон
          </label>
          <input
            className="auth__input"
            type="tel"
            placeholder="Телефон"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="auth__group">
          <label className="auth__label" for="email">
            Почта
          </label>
          <input
            className="auth__input"
            type="email"
            placeholder="Почта"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="auth__text-container">
          <p className="auth__text">
            У вас eсть аккаунта?{" "}
            <Link to={LOGIN_ROUTE} className="auth__link">
              Войти
            </Link>
          </p>
        </div>
        <button onClick={click} type="submit" className="login-button">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
});

export default Registration;
