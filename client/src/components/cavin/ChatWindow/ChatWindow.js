import style from "./ChatWindow.module.css";
import MsgSend from "./MsgSend.js";
import MsgReceive from "./MsgReceive";
import { useEffect } from "react";

function ChatWindow(props) {
  useEffect(() => {
    let chatWindow = document.getElementById("mainChat");
    chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: "smooth" });
  }, []);

  return (
    <div className={style.mainDiv} id="mainChat">
      {props.data.map((item) => {
        if (item["type"] == "send") {
          return <MsgSend key={item.id} data={item}></MsgSend>;
        } else {
          return <MsgReceive key={item.id} data={item}></MsgReceive>;
        }
      })}
    </div>
  );
}

export default ChatWindow;
