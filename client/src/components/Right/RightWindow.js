import style from "./RightWindow.module.css";
import Header from "./Header/Header";
import ChatWindow from "./ChatWindow/ChatWindow";
import Footer from "./Footer/Footer";
import BlankPage from "./blank";
import { useSelector } from "react-redux";

const conversations = [
  {
    type: "send",
    msg: "hi babae",
    TS: "10:00 am",
    id: 0,
  },
  { type: "receive", msg: "Hi bae", TS: "10:01 am", id: 1 },
  { type: "send", msg: "what are you doing?", TS: "10:02 am", id: 2 },
  {
    type: "send",
    msg: "Didn't hear from u recently...",
    TS: "10:03 am",
    id: 3,
  },
  {
    type: "receive",
    msg: "Nothing much... just doing my nails",
    TS: "10:01 am",
    id: 4,
  },
  {
    type: "receive",
    msg: "Sry to made you to worry..",
    TS: "10:03 am",
    id: 5,
  },
  { type: "send", msg: "No worry..", TS: "10:04 am", id: 6 },
  { type: "receive", msg: "So.. whats up?", TS: "10:04 am", id: 7 },
  { type: "send", msg: "u free on weekend?", TS: "10:04 am", id: 8 },
  {
    type: "send",
    msg: "Found a sushi spot nearby... wanna try?",
    TS: "10:05 am",
    id: 9,
  },
  { type: "receive", msg: "would love to...", TS: "10:05 am", id: 10 },
  { type: "send", msg: "Then ok..", TS: "10:06 am", id: 11 },
  { type: "send", msg: "Time?", TS: "10:06 am", id: 12 },
  { type: "receive", msg: "Evening?", TS: "10:07 am", id: 13 },
  { type: "send", msg: "Done", TS: "10:07 am", id: 14 },
  { type: "send", msg: "I will be waiting", TS: "10:08 am", id: 15 },
  {
    type: "receive",
    msg: "Love ya",
    TS: "10:08 am",
    id: 16,
  },
  { type: "send", msg: "see ya", TS: "10:08 am", id: 17 },
];

function RightWindow(props) {
  var session = useSelector((store) => store);
  if (session === "blank") {
    return <BlankPage></BlankPage>;
  } else {
    var contact = props.contacts.filter((contact) => {
      if (contact["name"] === session) {
        return contact;
      }
    });

    return (
      <div className={style.mainDiv}>
        <Header name={contact[0]["name"]} img={contact[0]["src"]}></Header>
        <ChatWindow data={conversations}></ChatWindow>
        <Footer></Footer>
      </div>
    );
  }
}

export default RightWindow;
