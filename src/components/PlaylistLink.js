import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Link } from "react-router-dom";
import { PLAYLIST_ROUTE } from "../utils/consts";

const PlaylistLink = observer(
  ({ playlistProp, isActive, handlePlaylistClickProp, children }) => {
    const { playlist } = useContext(Context);

    const handlePlaylistResetClick = (playlistId) => {
      playlist.setCurrentPlaylistId(playlistId);
    };

    const handleClick = () => {
      handlePlaylistResetClick(playlistProp.id);
      if (handlePlaylistClickProp) {
        handlePlaylistClickProp(`playlist ${playlistProp.id}`);
      }
    };

    const isActiveLink = isActive ? isActive(playlistProp.id) : false;

    return (
      <Link
        to={{ pathname: PLAYLIST_ROUTE + `/${playlistProp.name}` }}
        onClick={handleClick}
        className={`link ${isActiveLink ? "is-active-link" : ""}`}
      >
        {children}
      </Link>
    );
  }
);

export default PlaylistLink;
