import React from "react";
import TopBar from "../components/TopBar";
import "../assets/style/HomePage.css";
import Playlists from "../components/Playlists";

function HomePage() {
  return (
    <>
      <TopBar />
      <Playlists />
    </>
  );
}

export default HomePage;
