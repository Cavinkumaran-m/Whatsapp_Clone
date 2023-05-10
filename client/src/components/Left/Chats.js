import style from "./Chats.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import changeConversation from "../../store/Actions";

function Chats(props) {
  let dispatch = useDispatch();
  return (
    <div
      className={style.mainDiv}
      id="main"
      onClick={() => {
        dispatch(changeConversation(props.data.name));
      }}
    >
      <div className={style.image}>
        <img src={props.data.src}></img>
      </div>
      <div className={style.chatDiv}>
        <div style={{ display: "flex" }}>
          <span className={style.name}>{props.data.name}</span>
          <span className={style.last_time_stamp}></span>
        </div>
        <div style={{ display: "flex" }}>
          <span className={style.last_msg}>{props.data.last}</span>
          <span className={style.notification}></span>
        </div>
      </div>
    </div>
  );
}

export default Chats;
