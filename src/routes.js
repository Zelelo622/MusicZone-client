import {
  ALL_MUSIC_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PLAYLIST_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
} from "./utils/consts";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import AllMusicPage from "./pages/AllMusicPage";
import ProfilePage from "./pages/ProfilePage";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: AuthPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: AuthPage,
  },
  {
    path: ALL_MUSIC_ROUTE,
    Component: AllMusicPage,
  },
];

export const authRoutes = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: PROFILE_ROUTE,
    Component: ProfilePage,
  },
  {
    path: PLAYLIST_ROUTE + "/:name",
    Component: AllMusicPage,
  },
];
