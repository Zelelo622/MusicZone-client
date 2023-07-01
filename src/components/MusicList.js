import React, { useState } from "react";
import { music } from "../utils/objData";
import "../assets/style/MusicList.css";
import { Link } from "react-router-dom";
import PlayMusicSvg from "../assets/img/play-music.svg";
import PauseMusicSvg from "../assets/img/pause-music.svg";
import Player from "./Player";

function MusicList() {
  const [selectTrackId, setSelectTrackId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (index) => {
    if (selectTrackId === index) {
      setIsPlaying(!isPlaying);
    } else {
      setSelectTrackId(index);
      setIsPlaying(true);
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
                      music.id === selectTrackId && isPlaying ? PauseMusicSvg : PlayMusicSvg
                    }
                    alt="Старт/Пауза"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Player selectTrackId={selectTrackId} isPlayingTrack={isPlaying} />
    </>
  );
}

export default MusicList;
