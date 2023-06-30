import React, { useEffect, useState } from "react";
import "../assets/style/Player.css";
import CoverAlbumPng from "../assets/img/album-cover.png";
import FavoriteSvg from "../assets/img/favorite-icon.svg";
import VolumnSvg from "../assets/img/volume-icon.svg";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import track from "../assets/music/10 - Завтра война.mp3";
import { IconContext } from "react-icons";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(track);
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState("0");

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  const sec = duration / 1000;
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  const time = {
    min: min.toString().padStart(2, "0"),
    sec: secRemain.toString().padStart(2, "0"),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        const minStr = min.toString().padStart(2, "0");
        const secStr = sec.toString().padStart(2, "0");
        setCurrTime({
          minStr,
          secStr,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

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
            <button className="playButton">
              <IconContext.Provider value={{ size: "3em", color: "#FCFCFC" }}>
                <BiSkipPrevious />
              </IconContext.Provider>
            </button>
            {!isPlaying ? (
              <button className="playButton" onClick={playingButton}>
                <IconContext.Provider value={{ size: "3em", color: "#FCFCFC" }}>
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </button>
            ) : (
              <button className="playButton" onClick={playingButton}>
                <IconContext.Provider value={{ size: "3em", color: "#FCFCFC" }}>
                  <AiFillPauseCircle />
                </IconContext.Provider>
              </button>
            )}
            <button className="playButton">
              <IconContext.Provider value={{ size: "3em", color: "#FCFCFC" }}>
                <BiSkipNext />
              </IconContext.Provider>
            </button>
          </div>
          <div className="progress-player">
            <p className="time time-left">
              {currTime.minStr}:{currTime.secStr}
            </p>
            <input
              type="range"
              min="0"
              max={duration / 1000}
              value={seconds}
              className="timeline"
              onChange={(e) => {
                sound.seek([e.target.value]);
              }}
            />
            <p className="time time-right">
              {time.min}:{time.sec}
            </p>
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
