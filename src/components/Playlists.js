import React from "react";
import PlaylistPng from "../assets/img/playlist-1.png";
import "../assets/style/Playlist.css";

function Playlists() {
  const playlists = [
    {
      title: "Любимое",
      imgPath: PlaylistPng,
    },
    {
      title: "Рок-хиты",
      imgPath: PlaylistPng,
    },
  ];

  return (
    <>
      <div className="playlists">
        <div className="playlists__list">
          {playlists.map((playlist, index) => (
            <div className="playlists__item" key={index}>
              <img
                className="playlists__img"
                src={playlist.imgPath}
                alt="Обложка плейлиста"
              />
              <h3 className="playlists__title">{playlist.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Playlists;
