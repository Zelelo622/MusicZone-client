import React from "react";
import TopBar from "../components/TopBar";
import Playlists from "../components/Playlists";
import Player from "../components/Player";

function HomePage() {
  return (
    <>
      <TopBar />
      <Playlists />
      <Player />
    </>
  );
}

export default HomePage;
