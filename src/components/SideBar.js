import React, { useState } from "react";
import "../assets/style/SideBar.css";
import Logo from "../assets/img/logo.svg";
import {
  ALL_MUSIC_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/consts";
import { Link, useLocation } from "react-router-dom";
import { playlists } from "../utils/objData";
import { observer } from "mobx-react-lite";
import PlaylistLink from "./PlaylistLink";

const SideBar = observer(() => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const isLogin = location.pathname === LOGIN_ROUTE;
  const isRegistration = location.pathname === REGISTRATION_ROUTE;

  if (isLogin || isRegistration) {
    return null;
  }

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const isPlaylistActive = (playlistId) => {
    return activeLink === `playlist ${playlistId}`;
  };

  return (
    <>
      <nav className="sidebar">
        <Link className="link" to={HOME_ROUTE}>
          <div
            className="sidebar__logo"
            onClick={() => handleLinkClick(HOME_ROUTE)}
          >
            <img className="sidebar__logo-img" src={Logo} alt="логотип" />
            <h1 className="sidebar__logo-title">MusicZone</h1>
          </div>
        </Link>
        <div className="sidebar__content">
          <ul className="sidebar__list">
            <li className="sidebar__item">
              <Link
                className={`link ${
                  activeLink === HOME_ROUTE ? "is-active-link" : ""
                }`}
                to={HOME_ROUTE}
                onClick={() => handleLinkClick(HOME_ROUTE)}
              >
                Главная
              </Link>
            </li>
            <li className="sidebar__item">
              <Link
                className={`link ${
                  activeLink === ALL_MUSIC_ROUTE ? "is-active-link" : ""
                }`}
                to={ALL_MUSIC_ROUTE}
                onClick={() => handleLinkClick(ALL_MUSIC_ROUTE)}
              >
                Вся музыка
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar__content">
          <h3 className="sidebar__content-title">Мои плейлисты</h3>
          <ul className="sidebar__list">
            {playlists.map((playlist) => (
              <li
                className="sidebar__item-border sidebar__item"
                key={playlist.id}
              >
                <PlaylistLink
                  playlistProp={playlist}
                  isActive={isPlaylistActive}
                  handlePlaylistClickProp={handleLinkClick}
                >
                  {playlist.name}
                </PlaylistLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
});

export default SideBar;
