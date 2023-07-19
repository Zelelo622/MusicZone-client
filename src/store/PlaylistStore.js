import { makeAutoObservable } from "mobx";

export default class PlaylistStore {
  constructor() {
    this._favoritePlaylist = [];
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
}
