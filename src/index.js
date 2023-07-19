import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PlayerStore from "./store/PlayerStore";
import UserStore from "./store/UserStore";
import { BrowserRouter } from "react-router-dom";
import PlaylistStore from "./store/PlaylistStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      player: new PlayerStore(),
      playlist: new PlaylistStore(),
    }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Context.Provider>
);

reportWebVitals();
