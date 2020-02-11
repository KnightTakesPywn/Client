import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ChessPiece from './components/ChessPiece';
import ChessSquare from './components/ChessSquare';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <ChessPiece piece="Knight" color="Black"/>
      <ChessSquare />
    </div>
  );
}

export default App;
