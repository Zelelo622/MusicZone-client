import React from "react";
import "../assets/style/Playlist.css";
import { playlists } from "../utils/objData";
import { observer } from "mobx-react-lite";
import PlaylistLink from "./PlaylistLink";

const Playlists = observer(() => {
  return (
    <>
      <div className="playlists">
        <div className="playlists__list">
          {playlists.map((playlist) => (
            <PlaylistLink key={playlist.id} playlistProp={playlist}>
              <div className="playlists__item">
                <img
                  className="playlists__img"
                  src={playlist.imgPath}
                  alt="Обложка плейлиста"
                />
                <h3 className="playlists__title">{playlist.name}</h3>
              </div>
            </PlaylistLink>
          ))}
        </div>
      </div>
    </>
  );
});

export default Playlists;
