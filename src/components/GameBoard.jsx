import { useState } from "react";

export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, row_index) => (
        <li key={row_index}>
          <ol>
            {row.map((playerSymbol, col_index) => (
              <li key={col_index}>
                <button
                  onClick={() => onSelectSquare(row_index, col_index)}
                  disabled={playerSymbol}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
