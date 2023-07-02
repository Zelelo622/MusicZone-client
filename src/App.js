import "./assets/style/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import SideBar from "./components/SideBar";
import Player from "./components/Player";

function App() {
  return (
    <BrowserRouter>
      <main className="main">
        <div className="container">
          {/* <div className="main__content"> */}
            {/* <SideBar /> */}
            <AppRouter />
            {/* <Player /> */}
          {/* </div> */}
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
