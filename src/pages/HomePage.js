import React from "react";
import TopBar from "../components/TopBar";
import "../assets/style/HomePage.css"
import Playlists from "../components/Playlists";

function HomePage() {
  return (
    <div className="home">
      <TopBar />
      <Playlists />
    </div>
  );
}

export default HomePage;
