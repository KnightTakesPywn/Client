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
    
    return (
      <div id="board">{board.map( (row, index) => renderRow(row, index, this.props.clicked))}</div>
    );
  }
}

function renderRow(row, index, clicked) {
  // console.log('Row:', row);
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

function Square(props) {
  /* styling for the color of the square, 
  If piece then render Piece as well
  */
  return (
    <div 
      className={props.square_color + " square"} 
      id={`${props.x_loc}${props.y_loc}`} 
      onClick={props.clicked}
    >
      {props.chesspiece && 
      (
        <Piece class={`${props.x_loc}${props.y_loc}`} rank={props.chesspiece} color={props.pieceColor} />
      )}
    </div>
  );
}

function Piece(props) {
  const chess_pieces = {
    'white_king'  : 'ChessPieces/WK.png',
    'white_queen' : 'ChessPieces/WQ.png',
    'white_rook'  : 'ChessPieces/WR.png',
    'white_bishop': 'ChessPieces/WB.png',
    'white_knight': 'ChessPieces/WN.png',
    'white_pawn'  : 'ChessPieces/WP.png',
    'black_king'  : 'ChessPieces/BK.png',
    'black_queen' : 'ChessPieces/BQ.png',
    'black_rook'  : 'ChessPieces/BR.png',
    'black_bishop': 'ChessPieces/BB.png',
    'black_knight': 'ChessPieces/BN.png',
    'black_pawn'  : 'ChessPieces/BP.png',
  }
  
  return (
    <img src={chess_pieces[`${props.color}_${props.rank}`]} id={props.class} />
  );
}

export default ChessBoard