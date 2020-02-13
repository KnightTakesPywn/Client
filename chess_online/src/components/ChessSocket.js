import React, {Component} from "react";
import ChessBoard from "./ChessBoard";

class BoardSocket extends Component {

  chatSocket = new WebSocket(`ws://127.0.0.1:8000/ws/chess/${this.props.room}/`);
  
  constructor (props) {
    super(props)
    this.state = {
      board: {board:[]},
    coordinates: null,
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

  square_click = (e) => {
    e.preventDefault()
    const click_coord_string = e.target.id
    const click_coordinates = click_coord_string.split('')
    let convertedCoordinates = click_coordinates.map( val => { return parseInt(val) })
    this.save_send_coordinates(convertedCoordinates)
    console.log('click_coordinates:', convertedCoordinates)
  }

  save_send_coordinates = (coordinates) => {
    if (this.state.coordinates === null) {
      this.setState({coordinates: coordinates})
    } else {
      console.log('Sending coordinates:', this.state.coordinates, coordinates)
      this.chatSocket.send(JSON.stringify({
        'type': 'move',
        'start': this.state.coordinates,
        'end': coordinates,
      }))
      this.setState({coordinates: null})
    }
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
      <ChessBoard data={this.state.board} clicked={this.square_click}/>
      </div>
    )
  }
}

export default BoardSocket