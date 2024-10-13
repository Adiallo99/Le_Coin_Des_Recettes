import { Outlet } from "react-router-dom";

import "./assets/css/app.css"

function App() {
  return(
      <main>
        <Outlet />
      </main>
  )
}

export default App;
