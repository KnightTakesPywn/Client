import React from "react";
import ReactDOM from "react-dom";
import BoardSocket from "./ChessSocket";
import ChatRoom from "./ChatRoom"


export default (props) => {
  return (
    <div id="gamePage">
      <BoardSocket room={props.room}/>
      <ChatRoom room={props.room} username={props.username} />
    </div>
  )
}
