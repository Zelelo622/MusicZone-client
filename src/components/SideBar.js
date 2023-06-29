import React from "react";
import "../assets/style/SideBar.css";
import Logo from "../assets/img/logo.svg";
import { ALL_MUSIC_ROUTE, HOME_ROUTE } from "../utils/consts";
import { Link } from "react-router-dom";

function SideBar() {
  // TODO: заменить картинку в логотипе
  return (
    <>
      <nav className="sidebar">
        <Link className="link" to={HOME_ROUTE}>
          <div className="sidebar__logo">
            <img className="sidebar__logo-img" src={Logo} alt="логотип" />

            <h1 className="sidebar__logo-title">MusicZone</h1>
          </div>
        </Link>
        <div className="sidebar__content">
          <ul className="sidebar__list">
            <li className="sidebar__item">
              <Link className="link" to={HOME_ROUTE}>
                Главная
              </Link>
            </li>
            <li className="sidebar__item">
              <Link className="link" to={ALL_MUSIC_ROUTE}>
                Вся музыка
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar__content">
          <h3 className="sidebar__content-title">Мои плейлисты</h3>
          <ul className="sidebar__list">
            <li className="sidebar__item-border sidebar__item">
              <Link className="link" to={ALL_MUSIC_ROUTE}>
                Король и шут самое любимое
              </Link>
              <span></span>
            </li>
            <li className="sidebar__item-border sidebar__item">
              <Link className="link" to={ALL_MUSIC_ROUTE}>
                Кино
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
