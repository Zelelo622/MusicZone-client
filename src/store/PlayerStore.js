import { makeAutoObservable } from "mobx";

export default class PlayerStore {
  constructor() {
    this._currentTrackId = 0;
    this._isPlaying = false;
    this._currentTime = 0;
    this._volume = 1;
    makeAutoObservable(this);
  }

  set currentTrackId(trackId) {
    this._currentTrackId = trackId;
  }

  set isPlaying(playing) {
    this._isPlaying = playing;
  }

  set currentTime(time) {
    this._currentTime = time;
  }

  set volume(volume) {
    this._volume = volume;
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

  get volume() {
    return this._volume;
  }
}
