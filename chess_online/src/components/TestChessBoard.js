import React, {Component} from "react";
import ChessBoard from "./ChessBoard";

class BoardSocket extends Component {

  chatSocket = new WebSocket(`ws://127.0.0.1:8000/ws/chess/${this.props.room}/`);
  
  constructor (props) {
    super(props)
    this.state = {
      board: {gameState:{board:[]}}
    }
  }

  componentDidMount () {

    this.chatSocket.onopen = (e) => {
      console.log('Socket Open')
    }

    this.chatSocket.onmessage = (e) => {
      var data = JSON.parse(e.data);
      
      this.setState({board: data})
      // console.log('State:', this.state.board)
    };

    this.chatSocket.onclose = function(e) {
      console.error('Chat socket closed unexpectedly');
    };
  }

  getBoard = (e) => {
    e.preventDefault()
    this.chatSocket.send(JSON.stringify({
      'type': 'message',
      'message': this.state.message,
      'user':'React Client'
    }));
  }

  render () {
    return (
      <div>
      <button onClick={this.getBoard}>Get Board</button>
      <ChessBoard data={this.state.board}/>
      </div>
    )
  }
}

export default BoardSocket