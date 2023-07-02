import React from "react";
import "../assets/style/Playlist.css";
import { Link } from "react-router-dom";
import { playlists } from "../utils/objData";
import { PLAYLIST_ROUTE } from "../utils/consts";

function Playlists() {

  return (
    <>
      <div className="playlists">
        <div className="playlists__list">
          {playlists.map((playlist) => (
            <Link to={PLAYLIST_ROUTE + `/${playlist.name}`} key={playlist.id}>
              <div className="playlists__item">
                <img
                  className="playlists__img"
                  src={playlist.imgPath}
                  alt="Обложка плейлиста"
                />
                <h3 className="playlists__title">{playlist.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Playlists;
