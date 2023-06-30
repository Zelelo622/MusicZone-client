import React, { useEffect, useState } from "react";
import "../assets/style/Player.css";
import CoverAlbumPng from "../assets/img/album-cover.png";
import FavoriteSvg from "../assets/img/favorite-icon.svg";
import VolumnSvg from "../assets/img/volume-icon.svg";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { music } from "../utils/objData";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    const audioElement = document.getElementById("audio");
    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      };
    }
  }, [currentTrackIndex]);

  useEffect(() => {
    setCurrentTime(0);
  }, [currentTrackIndex]);

  const handleTimeUpdate = () => {
    setCurrentTime(document.getElementById("audio").currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(document.getElementById("audio").duration);
  };

  const playingButton = () => {
    const audioElement = document.getElementById("audio");
    if (isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    } else {
      audioElement.play();
      setIsPlaying(true);
    }
  };


  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === music.length - 1 ? 0 : prevIndex + 1
    );
  };

  const playPreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? music.length - 1 : prevIndex - 1
    );
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const currentTrack = music[currentTrackIndex];

  return (
    <>
      <div className="player">
        <div className="player__info">
          <img className="player__img" src={currentTrack.imgPath} alt="Обложка" />
          <div className="player__name">
            <div className="player__name-innerwrap">
              <Link className="player__name-link" to="#">
                {currentTrack.title}
              </Link>
            </div>
            <div className="player__artists">
              <Link className="player__artists-link" to="#">
                {currentTrack.artist}
              </Link>
            </div>
          </div>
        </div>
        <div className="player__instr">
          <div className="player__instr-inner">
            <button className="playButton" onClick={playPreviousTrack}>
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
            <button className="playButton" onClick={playNextTrack}>
              <IconContext.Provider value={{ size: "3em", color: "#FCFCFC" }}>
                <BiSkipNext />
              </IconContext.Provider>
            </button>
          </div>
          <div className="progress-player">
            <p className="time time-left">{formatTime(currentTime)}</p>
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              className="timeline"
              onChange={(e) => {
                document.getElementById("audio").currentTime = e.target.value;
              }}
            />
            <p className="time time-right">{formatTime(duration)}</p>
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
      <audio id="audio" src={currentTrack.soundPath} />
    </>
  );
}

export default Player;
