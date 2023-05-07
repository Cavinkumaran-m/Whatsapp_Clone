import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <Router>
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
