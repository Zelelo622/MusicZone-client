import PlaylistFavoritePng from "../assets/img/playlists/playlist-1.png";
import PlaylistIndiRockJpg from "../assets/img/playlists/playlistIndi.jpg";
import PlaylistRockJpg from "../assets/img/playlists/playlistRock.jpg";
import AlbomKinoPng from "../assets/img/albom/album-cover.png";

import track1 from "../assets/music/Завтра война.mp3";
import track2 from "../assets/music/Дерево.mp3";
import track3 from "../assets/music/Спокойная ночь.mp3";

export const playlists = [
  {
    id: 1,
    name: "Любимое",
    description: "",
    nickname: "",
    imgPath: PlaylistFavoritePng,
  },
  {
    id: 2,
    name: "Лучшие песни русского рока",
    description: "",
    nickname: "",
    imgPath: PlaylistRockJpg,
  },
  {
    id: 4,
    name: "Инди-хиты",
    description: "",
    nickname: "",
    imgPath: PlaylistIndiRockJpg,
  },
];

export const music = [
  {
    id: 1,
    name: "Завтра война",
    artist: "Кино",
    imgPath: AlbomKinoPng,
    soundPath: track1,
    playlists: [],
  },
  {
    id: 2,
    name: "Дерево",
    artist: "Кино",
    imgPath: AlbomKinoPng,
    soundPath: track2,
    playlists: [2],
  },
  {
    id: 3,
    name: "Спокойная ночь",
    artist: "Кино",
    imgPath: AlbomKinoPng,
    soundPath: track3,
    playlists: [2],
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
