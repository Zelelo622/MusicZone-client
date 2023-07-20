import { makeAutoObservable } from "mobx";
import { music, playlists } from "../utils/objData";

export default class PlaylistStore {
  constructor() {
    this._favoritePlaylist = [];
    this._currentPlaylistId = null;
    this._currentPlaylistTracks = [...music];
    makeAutoObservable(this);
  }

  addFavoritePlaylist(trackId) {
    if (!this._favoritePlaylist.includes(trackId)) {
      this._favoritePlaylist.push(trackId);
    }
  }

  removeFromFavoritePlaylist(trackId) {
    this._favoritePlaylist = this._favoritePlaylist.filter(
      (id) => id !== trackId
    );
  }

  setFavoritePlaylist(playlist) {
    this._favoritePlaylist = playlist;
  }

  get favoritePlaylist() {
    return this._favoritePlaylist;
  }

  setCurrentPlaylistId(playlistId) {
    this._currentPlaylistId = playlistId;
  }

  get currentPlaylistId() {
    return this._currentPlaylistId;
  }

  get currentPlaylist() {
    return playlists.find(
      (playlist) => playlist.id === this._currentPlaylistId
    );
  }

  setCurrentPlaylistTracks(currentPlaylistTracks) {
    this._currentPlaylistTracks = currentPlaylistTracks;
  }

  get currentPlaylistTracks() {
    return this._currentPlaylistTracks;
  }
}
