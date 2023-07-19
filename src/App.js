import "./assets/style/App.css";
import { useLocation } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

const App = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const isRegistration = location.pathname === REGISTRATION_ROUTE;

  return (
    
      <main className="main">
        <div className="container">
          <div
            className={`main__content ${
              isLogin || isRegistration ? "block" : ""
            }`}
          >
            <SideBar />
            <AppRouter />
            <Player />
          </div>
        </div>
      </main>
  );
};

export default App;
