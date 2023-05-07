import style from "./Chats.module.css";

function Chats(props) {
  return (
    <div className={style.mainDiv}>
      <img src={props.data.src}></img>
      <span className={style.name}>{props.data.name}</span>
      <span className={style.glass}></span>
      <span className={style.options}></span>
    </div>
  );
}

export default Chats;
