import React from 'react';
import ReactDOM from 'react-dom'
import ChessPiece from '../components/ChessPiece';

class ChessSquare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            square: props.square,
            chesspiece: new ChessPiece('Knight', 'Black'),
            color: props.color,
        }
    }
    render() {
        return (
            <>
            
            </>
        )
    }
}
 
export default ChessSquare;