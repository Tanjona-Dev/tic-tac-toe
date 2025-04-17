import { useState } from "react";
import "../../Style/style.css";

function Square({ value, onSquareClick }) {
  return (
    <button className="btn" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || CalculateWinner(squares)) {
      return;
    }
    const nextSquares = [...squares];
    isNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    setSquares(nextSquares);
    setIsNext(!isNext);
  }
  const winner = CalculateWinner(squares);
  let statu;
  if (winner) {
    statu = winner + " a gagné";
  } else {
    statu = "Prochain tour: " + (isNext ? "X" : "O");
  }
  return (
    <div>
      <div>
        <h1>Tic Tac Toe</h1>
        <div>{statu}</div>
      </div>
      <div className="container">
        <div className="btnColumn">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="btnColumn">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="btnColumn">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

export default Board;

function CalculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log("vrai");
      return squares[a];
    }
  }
  return null;
}
