import React, {Component} from "react";
import "../../src/ChessBoard.css";

class ChessBoard extends Component {
  
  constructor(props) {
    super(props);
    const board = props.data.gameState.board
    console.log("props:", board)
    this.state = {
      error: null,
      isLoaded: false,
      board: board,
    };
  }


  render() {
    // const { error, isLoaded, board } = this.state;
    const board = this.props.data.gameState.board
    if (false) {
      return <div>Error: {}</div>;
      // } else if (!isLoaded) {
      //   return <div>Loading...</div>;
    } else {
      console.log('Render', board)
      
      return (
        <div id="board">{board.map( (row, index) => renderRow(row, index))}</div>
      );
    }
  }
}


  // export default function ChessBoard() {
    //   return <div className="App">{board.map(row => renderRow(row))}</div>;
    // }
    // { "name": "BR", "type": "rook", "color": "black", "pos_row": 0, "pos_col": 0, "image": "url" },
  function renderRow(row, index) {
    console.log('Row:', row);
    let x_loc = index
    
    return (<>
    { row.map( (square, index) => {
      let y_loc = index
      let square_color = (y_loc + x_loc) % 2 === 0 ? 'white' : 'black'
      if (square !== null) { 
        return <Square
        x_loc={x_loc}
        y_loc={y_loc}
        square_color={square_color}
        chesspiece={square.type}
        pieceColor={square.pieceColor}
        />
      } else {
        return <Square 
        x_loc={x_loc}
        y_loc={y_loc}
        square_color={square_color}
        chesspiece=''
        pieceColor=''
        />
      }
    })}
  </>)
}

// { "name": "BR", "type": "rook", "color": "black", "pos_row": 0, "pos_col": 0, "image": "url" },
function Square(props) {
  /* styling for the color of the square, 
  If piece then render Piece as well
  */
  return (
    <div className={props.square_color + " square"} id={props.x_loc + props.y_loc}>
     {/* DANGER: need to only render piece if piece exists */}
      <div>Square: {props.x_loc},{props.y_loc}</div>
      {props.chesspiece && (
        <Piece rank={props.chesspiece} color={props.pieceColor} />
      )}
    </div>
  );
}

function Piece(props) {
  return (
    <p>
      {props.color} {props.rank}
    </p>
  );
}


export default ChessBoard