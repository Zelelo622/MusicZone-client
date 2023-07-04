import PlaylistPng from "../assets/img/playlist-1.png";
import AlbomPng from "../assets/img/album-cover.png";

import track1 from "../assets/music/Завтра война.mp3";
import track2 from "../assets/music/Дерево.mp3";
import track3 from "../assets/music/Спокойная ночь.mp3";

export const playlists = [
  {
    id: 1,
    name: "Любимое",
    description: "",
    nickname: "",
    imgPath: PlaylistPng,
  },
  {
    id: 2,
    name: "Рок-хиты",
    description: "",
    nickname: "",
    imgPath: PlaylistPng,
  },
  {
    id: 3,
    name: "Поп-хиты",
    description: "",
    nickname: "",
    imgPath: PlaylistPng,
  },
  {
    id: 4,
    name: "Инди-хиты",
    description: "",
    nickname: "",
    imgPath: PlaylistPng,
  },
  {
    id: 5,
    name: "Хип-хоп-хиты",
    description: "",
    nickname: "",
    imgPath: PlaylistPng,
  },
  {
    id: 6,
    name: "Шансон-хиты",
    description: "",
    nickname: "",
    imgPath: PlaylistPng,
  },
];

export const music = [
  {
    id: 1,
    name: "Завтра война",
    artist: "Кино",
    imgPath: AlbomPng,
    soundPath: track1,
    playlists: [1],
  },
  {
    id: 2,
    name: "Дерево",
    artist: "Кино",
    imgPath: AlbomPng,
    soundPath: track2,
    playlists: [1, 4],
  },
  {
    id: 3,
    name: "Спокойная ночь",
    artist: "Кино",
    imgPath: AlbomPng,
    soundPath: track3,
    playlists: [1, 2],
  },
];

export const user = {
  name: "Егор",
  surname: "Кирин",
  nickname: "Zelelo",
  phone: "88008008080",
  email: "egorcom27@gmail.com",
  password: "qwerty",
};
