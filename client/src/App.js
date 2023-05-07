import style from "./App.module.css";
import LeftWindow from "./components/deepak/LeftWindow";
import RightWindow from "./components/cavin/RightWindow";

function App() {
  return (
    <div className={style.App}>
      <LeftWindow></LeftWindow>
      <RightWindow></RightWindow>
    </div>
  );
}

export default App;
