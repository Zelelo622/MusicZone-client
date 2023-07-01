import React, { useContext, useEffect, useState } from "react";
import "../assets/style/Player.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { music } from "../utils/objData";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const Player = observer(({ selectTrackId, isPlayingTrack }) => {
  const playerStore = useContext(Context);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrackId, setCurrentTrackId] = useState(() => {
    const savedTrackId = localStorage.getItem("currentTrackId");
    return savedTrackId ? parseInt(savedTrackId) : 1;
  });
  const [isFavorite, setIsFavorite] = useState(false);
  const [volume, setVolume] = useState(() => {
    const savedVolume = localStorage.getItem("volume");
    return savedVolume ? parseFloat(savedVolume) : 1;
  });
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    localStorage.setItem("currentTrackId", currentTrackId.toString());
  }, [currentTrackId]);

  useEffect(() => {
    localStorage.setItem("volume", volume.toString());
  }, [volume]);

  useEffect(() => {
    const audioElement = document.getElementById("audio");
    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioElement.addEventListener("ended", handleTrackEnded);
      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
        audioElement.removeEventListener("ended", handleTrackEnded);
      };
    }
  }, [currentTrackId]);

  useEffect(() => {
    setCurrentTime(0);
    setIsLoaded(false);
  }, [currentTrackId]);

  useEffect(() => {
    setCurrentTrackId(
      selectTrackId !== null && selectTrackId !== undefined
        ? selectTrackId
        : currentTrackId
    );
    console.log(currentTrackId);
    if (currentTrackId === selectTrackId) {
      setIsLoaded(true);
    }
    setIsPlaying(
      isPlayingTrack !== null && isPlayingTrack !== undefined
        ? isPlayingTrack
        : isPlaying
    );
  }, [selectTrackId, isPlayingTrack]);

  useEffect(() => {
    if (isLoaded) {
      const audioElement = document.getElementById("audio");
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying, isLoaded]);

  const handleTimeUpdate = () => {
    setCurrentTime(document.getElementById("audio").currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(document.getElementById("audio").duration);
    setIsLoaded(true);
  };

  const handleTrackEnded = () => {
    playNextTrack();
  };

  const playingButton = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const playNextTrack = () => {
    const currentIndex = music.findIndex(
      (track) => track.id === currentTrackId
    );
    const nextIndex = currentIndex === music.length - 1 ? 0 : currentIndex + 1;
    const nextTrackId = music[nextIndex].id;
    setCurrentTrackId(nextTrackId);
    setIsPlaying(true);
  };

  const playPreviousTrack = () => {
    const currentIndex = music.findIndex(
      (track) => track.id === currentTrackId
    );
    const previousIndex =
      currentIndex === 0 ? music.length - 1 : currentIndex - 1;
    const previousTrackId = music[previousIndex].id;
    setCurrentTrackId(previousTrackId);
    setIsPlaying(true);
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

  const handleVolumeChange = (e) => {
    const audioElement = document.getElementById("audio");
    const volumeValue = parseFloat(e.target.value);
    audioElement.volume = volumeValue;
    setVolume(volumeValue);
    setIsMuted(false);
  };

  const toggleMute = () => {
    const audioElement = document.getElementById("audio");
    if (isMuted) {
      audioElement.volume = previousVolume;
      setVolume(previousVolume);
      setIsMuted(false);
    } else {
      setPreviousVolume(volume);
      audioElement.volume = 0;
      setVolume(0);
      setIsMuted(true);
    }
  };

  const currentTrackIndex = music.findIndex(
    (track) => track.id === currentTrackId
  );
  const currentTrack = music[currentTrackIndex];

  return (
    <>
      <div className="player">
        <div className="player__info">
          <img
            className="player__img"
            src={currentTrack.imgPath}
            alt="Обложка"
          />
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
              step="0.01"
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
          <button
            className={`player__settings-btn ${
              isFavorite ? "player__settings-like" : "player__settings-fav"
            }`}
            onClick={toggleFavorite}
          ></button>

          <button
            className="player__settings-btn player__settings-vol"
            onClick={toggleMute}
          ></button>

          <div className="player__volume">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              className="volume-slider"
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>
      <audio id="audio" src={currentTrack.soundPath} autoPlay />
    </>
  );
});

export default Player;
