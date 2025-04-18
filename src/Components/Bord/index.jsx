import { useState } from "react";
import "../../Style/style.css";

function Square({ value, onSquareClick }) {
  return (
    <button className="btn" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ onPlay, squares, isNext }) {
  function handleClick(i) {
    if (squares[i] || CalculateWinner(squares)) {
      return;
    }
    const nextSquares = [...squares];
    isNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    onPlay(nextSquares);
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

function Game() {
  const [isNext, setIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handleChange(props) {
    setHistory([...history, props]);
    setIsNext(!isNext);
  }

  const teste = history.map((hist, index) => {
    let description;
    if (index > 0) {
      description = "Aller au coup #" + index;
    } else {
      description = "Revenir au debut";
    }
    return (
      <li key={hist}>
        <button>{description}</button>
      </li>
    );
  });

  return (
    <div>
      <div>
        <h1>Tic Tac Toe</h1>
      </div>
      <div>
        <div>
          <Board
            onPlay={handleChange}
            squares={currentSquares}
            isNext={isNext}
          />
        </div>
        <div>
          <ol>{teste}</ol>
        </div>
      </div>
    </div>
  );
}
export default Game;

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
      return squares[a];
    }
  }
  return null;
}
