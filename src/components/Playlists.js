import React from "react";
import "../assets/style/Playlist.css";
import { Link } from "react-router-dom";
import { playlists } from "../utils/objData";

function Playlists() {

  return (
    <>
      <div className="playlists">
        <div className="playlists__list">
          {playlists.map((playlist, index) => (
            <Link>
              <div className="playlists__item" key={index}>
                <img
                  className="playlists__img"
                  src={playlist.imgPath}
                  alt="Обложка плейлиста"
                />
                <h3 className="playlists__title">{playlist.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Playlists;
