import React from "react";
import BoardSocket from "./ChessSocket";
import ChatRoom from "./ChatRoom"
import "../../src/gamePage.css";

export default (props) => {
  return (
    <div id="gamePage">
      <BoardSocket room={props.room}/>
      <ChatRoom room={props.room} username={props.username} />
    </div>
  )
}
