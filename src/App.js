import "./assets/style/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from ".";

const App = observer(() => {
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <main className="main">
        <div className="container">
          {/* {user.isAuth ? ( */}
            <div className="main__content">
              <SideBar />
              <AppRouter />
              <Player />
            </div>
          {/* ) : ( */}
            {/* <AppRouter /> */}
          {/* )} */}
        </div>
      </main>
    </BrowserRouter>
  );
});

export default App;
