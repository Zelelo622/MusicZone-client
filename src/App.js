import "./assets/style/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import SideBar from "./components/SideBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <main className="main">
        <Container>
          <div className="main-content">
            <SideBar />
            <AppRouter />
          </div>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
