import React from 'react';
import Square from './Square';

const Board = ({ board, onSquareClick }) => {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Square key={index} value={value} onClick={() => onSquareClick(index)} />
      ))}
    </div>
  );
};

export default Board;