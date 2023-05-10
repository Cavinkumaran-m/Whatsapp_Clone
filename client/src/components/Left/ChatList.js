import Chats from "./Chats";

function ChatList(props) {
  return (
    <>
      {props.data.map((contact) => {
        return <Chats key={contact.id} data={contact}></Chats>;
      })}
    </>
  );
}

export default ChatList;
