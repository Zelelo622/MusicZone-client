import PlaylistPng from "../assets/img/playlist-1.png";
import AlbomPng from "../assets/img/album-cover.png";

import track1 from "../assets/music/Завтра война.mp3";
import track2 from "../assets/music/Дерево.mp3";
import track3 from "../assets/music/Спокойная ночь.mp3";

export const playlists = [
  {
    id: 1,
    title: "Любимое",
    imgPath: PlaylistPng,
  },
  {
    id: 2,
    title: "Рок-хиты",
    imgPath: PlaylistPng,
  },
  {
    id: 3,
    title: "Поп-хиты",
    imgPath: PlaylistPng,
  },
  {
    id: 4,
    title: "Инди-хиты",
    imgPath: PlaylistPng,
  },
  {
    id: 5,
    title: "Хип-хоп-хиты",
    imgPath: PlaylistPng,
  },
  {
    id: 6,
    title: "Шансон-хиты",
    imgPath: PlaylistPng,
  },
];

export const music = [
  {
    id: 1,
    title: "Завтра война",
    artist: "Кино",
    imgPath: AlbomPng,
    soundPath: track1,
  },
  {
    id: 2,
    title: "Дерево",
    artist: "Кино",
    imgPath: AlbomPng,
    soundPath: track2,
  },
  {
    id: 3,
    title: "Спокойная ночь",
    artist: "Кино",
    imgPath: AlbomPng,
    soundPath: track3,
  },
];
