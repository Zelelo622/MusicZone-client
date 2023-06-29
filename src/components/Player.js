import React, { useState } from "react";
import "../assets/style/Player.css";
import CoverAlbumPng from "../assets/img/album-cover.png";
import FavoriteSvg from "../assets/img/favorite-icon.svg";
import VolumnSvg from "../assets/img/volume-icon.svg";
import StartSvg from "../assets/img/start-icon.svg";
import BeforeTrackSvg from "../assets/img/before-track-icon.svg";
import AfterTrackSvg from "../assets/img/after-track-icon.svg";
import { Link } from "react-router-dom";

function Player() {
  const [progress, setProgress] = useState(0);
  const maxProgress = 100;

  const handleChange = (event) => {
    const value = Number(event.target.value);
    setProgress(value);
    // Дополнительные действия при изменении значения прогресса (например, переключение трека)
  };

  return (
    <>
      <div className="player">
        <div className="player__info">
          <img className="player__img" src={CoverAlbumPng} alt="Обложка" />
          <div className="player__name">
            <div className="player__name-innerwrap">
              <Link className="player__name-link" to="#">
                Нам с тобой
              </Link>
            </div>
            <div className="player__artists">
              <Link className="player__artists-link" to="#">
                Кино
              </Link>
            </div>
          </div>
        </div>
        <div className="player__instr">
          <div className="player__instr-inner">
            <img
              className="player__instr-img"
              src={BeforeTrackSvg}
              alt="Назад"
            />
            <img className="player__instr-img" src={StartSvg} alt="Старт" />
            <img
              className="player__instr-img"
              src={AfterTrackSvg}
              alt="Вперед"
            />
          </div>
          <div class="progress-bar">
            <input
              type="range"
              id="progressBar"
              min={0}
              max={maxProgress}
              value={progress}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="player__settings">
          <img className="player__settings-img" src={FavoriteSvg} alt="Лайк" />
          <img
            className="player__settings-img"
            src={VolumnSvg}
            alt="Громкость"
          />
        </div>
      </div>
    </>
  );
}

export default Player;
