import style from "./MsgSend.module.css";

function MsgSend(props) {
  return (
    <div className={style.mainDiv}>
      <div className={style.msg}>{props.data.msg}</div>
      <div className={style.timestamp}>{props.data.TS}</div>
    </div>
  );
}

export default MsgSend;
