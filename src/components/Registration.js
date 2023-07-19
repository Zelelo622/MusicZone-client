import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "..";
import { Link, useNavigate } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";

const Registration = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [nick, setNick] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = () => {
    user.setIsAuth(true);
    navigate(HOME_ROUTE);
  };

  return (
    <div className="auth__container">
      <form className="auth__form">
        <div className="auth__group">
          <label className="auth__label" htmlFor="name">
            Имя
          </label>
          <input
            className="auth__input"
            type="text"
            placeholder="Имя"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="auth__group">
          <label className="auth__label" htmlFor="surname">
            Фамилия
          </label>
          <input
            className="auth__input"
            type="text"
            placeholder="Фамилия"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="auth__group">
          <label className="auth__label" htmlFor="nick">
            Никнейм
          </label>
          <input
            className="auth__input"
            type="text"
            placeholder="Никнейм"
            id="nick"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
          />
        </div>
        <div className="auth__group">
          <label className="auth__label" htmlFor="phone">
            Телефон
          </label>
          <input
            className="auth__input"
            type="tel"
            placeholder="Телефон"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
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
