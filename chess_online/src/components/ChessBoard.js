import React, {Component} from "react";
import "../../src/ChessBoard.css";

class ChessBoard extends Component {
  constructor(props) {
    super(props);
    const board = props.data.board
    this.state = {
      error: null,
      isLoaded: false,
      board: board,
    };
  }

  render() {
    // const { error, isLoaded, board } = this.state;
    const board = this.props.data.board
    if (false) {
      return <div>Error: {}</div>;
      // } else if (!isLoaded) {
      //   return <div>Loading...</div>;
    } else {
      
      return (
        <div id="board">{board.map( (row, index) => renderRow(row, index, this.props.clicked))}</div>
      );
    }
  }
}



  // export default function ChessBoard() {
    //   return <div className="App">{board.map(row => renderRow(row))}</div>;
    // }
    // { "name": "BR", "type": "rook", "color": "black", "pos_row": 0, "pos_col": 0, "image": "url" },
function renderRow(row, index, clicked) {
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
      pieceColor={square.color}
      clicked={clicked}

      />
    } else {
      return <Square 
      x_loc={x_loc}
      y_loc={y_loc}
      square_color={square_color}
      chesspiece=''
      pieceColor=''
      clicked={clicked}
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
    <div className={props.square_color + " square"} id={`${props.x_loc}${props.y_loc}`} onClick={props.clicked}>
     {/* DANGER: need to only render piece if piece exists */}
      <div>{props.x_loc},{props.y_loc}</div>
      {props.chesspiece && (
        <Piece rank={props.chesspiece} color={props.pieceColor} />
      )}
    </div>
  );
}

function Piece(props) {
  const chess_pieces = {
    'white_king': '♔',
    'white_queen': '♕',
    'white_rook': '♖',
    'white_bishop': '♗',
    'white_knight': '♘',
    'white_pawn': '♙',
    'black_king': '♚',
    'black_queen': '♛',
    'black_rook': '♜',
    'black_bishop': '♝',
    'black_knight': '♞',
    'black_pawn': '♟',
  }

  // {`${props.x_loc}${props.y_loc}`}
  console.log(`props.color:' ${props.color}_${props.rank}`)
  return (
    <p>
      {chess_pieces[`${props.color}_${props.rank}`]}
    </p>
  );
}

export default ChessBoard