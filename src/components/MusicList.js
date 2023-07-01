import React, { useContext, useState } from "react";
import { music } from "../utils/objData";
import "../assets/style/MusicList.css";
import { Link } from "react-router-dom";
import PlayMusicSvg from "../assets/img/play-music.svg";
import PauseMusicSvg from "../assets/img/pause-music.svg";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const MusicList = observer(() => {
  const { player } = useContext(Context);

  const handlePlayPause = (index) => {
    if (player.selectTrackId === index) {
      player.setIsPlaying(!player.isPlaying);
    } else {
      player.setCurrentTrackId(index);
      player.setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="music">
        <div className="music__list">
          {music.map((music) => (
            <div className="music__item" key={music.id}>
              <div className="music__info">
                <img className="music__img" src={music.imgPath} alt="Обложка" />
                <div className="music__title">
                  <Link className="music__name-link music__artists-link" to="#">
                    {music.artist}
                  </Link>{" "}
                  <span className="music__title-span">-</span>
                  <Link className="music__name-link" to="#">
                    {music.title}
                  </Link>
                </div>
              </div>
              <div className="music__btns">
                <button
                  className="music__btn"
                  onClick={() => handlePlayPause(music.id)}
                >
                  <img
                    src={
                      music.id === player.selectTrackId && player.isPlaying
                        ? PauseMusicSvg
                        : PlayMusicSvg
                    }
                    alt="Старт/Пауза"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

export default MusicList;
