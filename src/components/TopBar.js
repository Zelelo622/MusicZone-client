import React from "react";
import "../assets/style/TopBar.css";
import SearchBtn from "../assets/img/search.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const isRegistration = location.pathname === REGISTRATION_ROUTE;

  if (isLogin || isRegistration) {
    return null;
  }

  const login = () => {
    navigate(LOGIN_ROUTE);
  };

  const registration = () => {
    navigate(REGISTRATION_ROUTE)
  }

  return (
    <>
      <nav className="topbar">
        <div className="topbar__search">
          <input
            className="topbar__search-input"
            type="text"
            placeholder="Что ты хочешь послушать?"
          />
          <button className="topbar__search-btn">
            <img className="topbar__search-img" src={SearchBtn} alt="Поиск" />
          </button>
        </div>
        <div className="topbar__btns">
          <button className="topbar__btn" onClick={login}>Войти</button>
          <button className="topbar__btn topbar__btn-border" onClick={registration}>
            Зарегистрироваться
          </button>
        </div>
      </nav>
    </>
  );
}

export default TopBar;
