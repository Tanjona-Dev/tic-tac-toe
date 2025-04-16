import { useState } from "react";
import "../../Style/style.css";

function Square({value, onSquareClick}) {
  return (
    <button className="btn" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    
  }
  return (
    <div>
      <div>
        <h1>Tic Tac Toe</h1>
      </div>
      <div className="container">
        <div className="btnColumn">
          <Square value={squares[0]} onSquareClick={handleClick} />
          <Square value={squares[1]} onSquareClick={handleClick} />
          <Square value={squares[2]} onSquareClick={handleClick} />
        </div>
        <div className="btnColumn">
          <Square value={squares[3]} onSquareClick={handleClick} />
          <Square value={squares[4]} onSquareClick={handleClick} />
          <Square value={squares[5]} onSquareClick={handleClick} />
        </div>
        <div className="btnColumn">
          <Square value={squares[6]} onSquareClick={handleClick} />
          <Square value={squares[7]} onSquareClick={handleClick} />
          <Square value={squares[8]} onSquareClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Board;
