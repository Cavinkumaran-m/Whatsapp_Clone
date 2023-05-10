import style from "./App.module.css";
import LeftWindow from "./components/Left/LeftWindow";
import RightWindow from "./components/Right/RightWindow";
import StoreReducer from "./store/Reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import changeConversation from "./store/Actions";

let store = createStore(
  StoreReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

var contacts = [
  {
    name: "Sam",
    src: "https://c.ndtvimg.com/2023-04/apniecfg_samantha-_625x300_27_April_23.jpg",
    last: "hi babe",
    ts: "10:00 am",
    id: 0,
  },
  {
    name: "Kajal",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Kajal_Aggarwal_on_the_sets_of_Queen_Kannada_remake.jpg",
    last: "miss you",
    ts: "10:00 am",
    id: 1,
  },
  {
    name: "Malavika",
    src: "https://imagevars.gulfnews.com/2023/02/28/MALAVIKA-MOHAN_186989121e1_original-ratio.jpg",
    last: "Oii",
    ts: "10:00 am",
    id: 2,
  },
  {
    name: "Tammu",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Tamannaah_at_an_event_in_Cochin%2C_July_2018.jpg/220px-Tamannaah_at_an_event_in_Cochin%2C_July_2018.jpg",
    last: "Love ya",
    ts: "10:00 am",
    id: 3,
  },
];

function App() {
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (store.getState() !== "blank")
        store.dispatch(changeConversation("blank"));
    }
  });

  console.log("App rendered");
  return (
    <div className={style.App}>
      <Provider store={store}>
        <LeftWindow contacts={contacts}></LeftWindow>
        <RightWindow contacts={contacts}></RightWindow>
      </Provider>
    </div>
  );
}

export default App;
