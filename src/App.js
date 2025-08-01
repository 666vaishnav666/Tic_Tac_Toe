// src/App.js
import React, { useState } from 'react';
import Board from './components/Board';
import './App.css';

const initialBoard = Array(9).fill(null);

function App() {
  const [board, setBoard] = useState(initialBoard);
  const [isXTurn, setIsXTurn] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setBoard(initialBoard);
    setIsXTurn(true);
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <h2>{winner ? `Winner: ${winner}` : board.every(Boolean) ? "It's a draw!" : `Next Turn: ${isXTurn ? 'X' : 'O'}`}</h2>
      <Board board={board} onSquareClick={handleClick} />
      <button className="reset" onClick={handleReset}>Restart Game</button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default App;
