import React, { useContext } from "react";
import "../assets/style/TopBar.css";
import SearchBtn from "../assets/img/search.svg";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/consts";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const TopBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const isRegistration = location.pathname === REGISTRATION_ROUTE;
  const isAuth = user.isAuth;

  if (isLogin || isRegistration) {
    return null;
  }

  const login = () => {
    navigate(LOGIN_ROUTE);
  };

  const registration = () => {
    navigate(REGISTRATION_ROUTE);
  };

  const profile = () => {
    navigate(PROFILE_ROUTE);
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
          {isAuth ? (
            <>
              <button className="topbar__btn topbar__btn-border" onClick={profile}>
                Профиль
              </button>
            </>
          ) : (
            <>
              <button className="topbar__btn" onClick={login}>
                Войти
              </button>
              <button
                className="topbar__btn topbar__btn-border"
                onClick={registration}
              >
                Зарегистрироваться
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
});

export default TopBar;
