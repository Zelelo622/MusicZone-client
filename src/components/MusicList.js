import React, { useContext, useState } from "react";
import { music, playlists } from "../utils/objData";
import "../assets/style/MusicList.css";
import { Link, useParams } from "react-router-dom";
import PlayMusicSvg from "../assets/img/play-music.svg";
import PauseMusicSvg from "../assets/img/pause-music.svg";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const MusicList = observer(() => {
  const { player, playlist } = useContext(Context);
  const { name } = useParams();

  let arrMusic;
  let playlistMusic;
  if (name) {
    const currentPlaylist = playlists.find((item) => item.name === name);
    if (currentPlaylist.name === "Любимое") {
      playlistMusic = music.filter((item) =>
        playlist.favoritePlaylist.includes(item.id)
      );
    } else {
      playlistMusic = music.filter((item) =>
        item.playlists.includes(currentPlaylist.id)
      );
    }
    arrMusic = playlistMusic;
  } else {
    arrMusic = music;
  }

  const handlePlayPause = (index) => {
    if (playlist.currentPlaylistId === 1) {
      let playlistMusic;
      const currentPlaylist = playlists.find((item) => item.name === "Любимое");
      if (currentPlaylist.name === "Любимое") {
        playlistMusic = music.filter((item) =>
          playlist.favoritePlaylist.includes(item.id)
        );

        playlist.setCurrentPlaylistTracks(playlistMusic);
      } else {
        playlist.setCurrentPlaylistId(null);
      }
    } else {
      playlist.setCurrentPlaylistTracks(music);
    }
    if (player.currentTrackId === index) {
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
          {arrMusic.map((music) => (
            <div className="music__item" key={music.id}>
              <div className="music__info">
                <img className="music__img" src={music.imgPath} alt="Обложка" />
                <div className="music__title">
                  <Link className="music__name-link music__artists-link" to="#">
                    {music.artist}
                  </Link>{" "}
                  <span className="music__title-span">-</span>
                  <Link className="music__name-link" to="#">
                    {music.name}
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
                      music.id === player.currentTrackId && player.isPlaying
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
