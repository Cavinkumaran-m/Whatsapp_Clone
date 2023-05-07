import style from "./RightWindow.module.css";
import Header from "./Header/Header";
import ChatWindow from "./ChatWindow/ChatWindow";
import Footer from "./Footer/Footer";

const details = {
  name: "Rae Lil Black",
  img: "https://pbs.twimg.com/media/DlnpurZW0AI5uk6.jpg:small",
};

const conversations = [
  {
    type: "send",
    msg: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
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
    msg: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    TS: "10:08 am",
    id: 16,
  },
  { type: "send", msg: "see ya", TS: "10:08 am", id: 17 },
];

const conversations2 = [
  {
    type: "send",
    msg: "Hai babe",
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
    msg: "see ya bae",
    TS: "10:08 am",
    id: 16,
  },
  { type: "send", msg: "see ya", TS: "10:08 am", id: 17 },
];

function RightWindow() {
  return (
    <div className={style.mainDiv}>
      <Header name={details["name"]} img={details["img"]}></Header>
      <ChatWindow data={conversations}></ChatWindow>
      <Footer></Footer>
    </div>
  );
}

export default RightWindow;
