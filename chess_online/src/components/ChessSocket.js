import React, {Component} from "react";
import ChessBoard from "./ChessBoard";

class BoardSocket extends Component {

  chatSocket = new WebSocket(`ws://167.71.162.123:8000/ws/chess/${this.props.room}/`);
  
  constructor (props) {
    super(props)
    this.state = {
      board: {board:[]},
      coordinates: null,
      turn: 'white',
    }
  }

  componentDidMount () {

    this.chatSocket.onopen = (e) => {
      console.log('Socket Open')
    }

    this.chatSocket.onmessage = (e) => {
      var data = JSON.parse(e.data);
      if (data.type === 'gameState') {
        this.setState({board: data, turn: data.turn})
        console.log('State:', this.state.board)
      }
    };

    this.chatSocket.onclose = function(e) {
      console.error('Chat socket closed unexpectedly');
    };
  }

  square_click = (e) => {
    e.preventDefault()
    let target = e.target
    const click_coord_string = target.id
    const click_coordinates = click_coord_string.split('')
    let convertedCoordinates = click_coordinates.map( val => { return parseInt(val) })
    this.save_send_coordinates(convertedCoordinates)
    console.log('click_coordinates:', convertedCoordinates)
  }
  
  save_send_coordinates = (coordinates) => {
    const square = this.state.board.board[coordinates[0]][coordinates[1]]

    if (this.state.coordinates === null) {
      if (square && square.color === this.state.turn) {
        this.setState({coordinates: coordinates})
        this.addHighlight(coordinates)
      }
    } else {
      if (square && square.color === this.state.turn) {
        this.removeHighlight(this.state.coordinates)
        this.setState({coordinates: coordinates})
        this.addHighlight(coordinates)
      } else {
        console.log('Sending coordinates:', this.state.coordinates, coordinates)
        this.chatSocket.send(JSON.stringify({
          'type': 'move',
          'start': this.state.coordinates,
          'end': coordinates,
        }))
        this.removeHighlight(this.state.coordinates)
        this.setState({coordinates: null})
      }
    }
  }

  addHighlight(coordinates) {
    let spot = document.getElementById(coordinates.join(''))
    spot.setAttribute("class", "highlight");
  }

  removeHighlight (coordinates) {
    console.log('Removing')
    let spot = document.getElementById(coordinates.join(''))
    spot.setAttribute("class", ['beige square', 'grey square', 'AHHHHH'][(coordinates[0] + coordinates[1]) % 2]);
  }

  render () {
    let piece = this.state.turn === 'white' ? 'ChessPieces/WK.png': 'ChessPieces/BK.png'
    return (
      <div id="gameSpace">
        <div id="gameState">
          <h1 id="currentRoom">Game Room: {this.props.room}</h1>
          <div id="currentTurn">
            <h2>Current Turn:</h2>
            <img src={piece} id="turn" alt=''/>
          </div>
        </div>
        <ChessBoard data={this.state.board} clicked={this.square_click}/>
      </div>
    )
  }
}

export default BoardSocket
