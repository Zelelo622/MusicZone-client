import { makeAutoObservable } from "mobx";

export default class PlayerStore {
  constructor() {
    this._currentTrackId = parseInt(localStorage.getItem("currentTrackId"), 10) || 1;
    this._isPlaying = false;
    this._currentTime = 0;
    makeAutoObservable(this);
  }

  setCurrentTrackId(trackId) {
    this._currentTrackId = trackId;
  }

  setIsPlaying(playing) {
    this._isPlaying = playing;
  }

  setCurrentTime(time) {
    this._currentTime = time;
  }

  get currentTrackId() {
    return this._currentTrackId;
  }

  get isPlaying() {
    return this._isPlaying;
  }

  get currentTime() {
    return this._currentTime;
  }
}
