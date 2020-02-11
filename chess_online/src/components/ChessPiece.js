import React from 'react';

class ChessPiece extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chesspiece: props.piece,
            color: props.color,
        }
    }
    render() {
        return (
            <>
        <span>Piece: {this.state.chesspiece} </span>
        <span>Color: {this.state.color} </span>
        </>
        )
    }
}

export default ChessPiece;