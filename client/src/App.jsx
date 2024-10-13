import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

import "./assets/css/app.css";
import "./assets/css/nav.css";
import "./assets/css/authenticate.css";
import "./assets/css/home.css";
import "./assets/css/recipe.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
