import style from "./Chats.module.css";

function Chats(props) {
  return (
    <div className={style.mainDiv}>
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
