import React from "react";
import "../assets/style/TopBar.css";
import SearchBtn from "../assets/img/search.svg";
import { useNavigate } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../utils/consts";

function TopBar() {
  const navigate = useNavigate();

  const login = () => {
    navigate(REGISTRATION_ROUTE);
  };

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
          <button className="topbar__btn topbar__btn-border">
            Зарегистрироваться
          </button>
        </div>
      </nav>
    </>
  );
}

export default TopBar;
