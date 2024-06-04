"use client";
import React, { useState } from "react";
import Slots from "./Slots";

export default function Board() {
  const [board, setBoard] = useState([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);
  const [hoveredColumn, setHoveredColumn] = useState(null);
  const [currPlayer, setCurrPlayer] = useState("X");
  const [oppPlayer, setOppPlayer] = useState("O");
  const [gameOver, setGameOver] = useState(false);

  const checkWin = (row, column, ch) => {
    try {
      if (board[row + 1][column] === ch) {
        if (board[row + 2][column] === ch) {
          if (board[row + 3][column] === ch) {
            return true;
          }
        }
      }
    } catch (e) {
      console.log(e);
    }

    try {
      if (board[row - 1][column] === ch) {
        if (board[row - 2][column] === ch) {
          if (board[row - 3][column] === ch) {
            return true;
          }
        }
      }
    } catch (e) {
      console.log(e);
    }

    try {
      if (board[row + 1][column + 1] === ch) {
        if (board[row + 2][column + 2] === ch) {
          if (board[row + 3][column + 3] === ch) {
            return true;
          }
        }
      }
    } catch (e) {
      console.log(e);
    }

    try {
      if (board[row + 1][column - 1] === ch) {
        if (board[row + 2][column - 2] === ch) {
          if (board[row + 3][column - 3] === ch) {
            return true;
          }
        }
      }
    } catch (e) {
      console.log(e);
    }

    try {
      if (board[row][column + 1] === ch) {
        if (board[row][column + 2] === ch) {
          if (board[row][column + 3] === ch) {
            return true;
          }
        }
      }
    } catch (e) {
      console.log(e);
    }

    try {
      if (board[row][column - 1] === ch) {
        if (board[row][column - 2] === ch) {
          if (board[row][column - 3] === ch) {
            return true;
          }
        }
      }
    } catch (e) {
      console.log(e);
    }

    try {
      if (board[row - 1][column - 1] === ch) {
        if (board[row - 2][column - 2] === ch) {
          if (board[row - 3][column - 3] === ch) {
            return true;
          }
        }
      }
    } catch (e) {
      console.log(e);
    }

    try {
      if (board[row - 1][column + 1] === ch) {
        if (board[row - 2][column + 2] === ch) {
          if (board[row - 3][column + 3] === ch) {
            return true;
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateBoard = (row, column, ch) => {
    setBoard((prev) => {
      const boardCopy = [...prev];
      boardCopy[row][column] = ch;
      return boardCopy;
    });
    return checkWin(row, column, ch);
  };

  const handleClick = (e) => {
    const column = e.target.getAttribute("x");
    let row = board.findIndex((rowArr, index) => {
      return rowArr[column] !== "" || index === board.length - 1;
    });

    if (row !== board.length - 1) row -= 1;
    if (board[row][column] !== "") row -= 1;

    setGameOver(updateBoard(row, column, currPlayer));

    if (!gameOver) {
      const currPlayerCopy = currPlayer;
      setCurrPlayer(oppPlayer);
      setOppPlayer(currPlayerCopy);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {gameOver && (
        <div className="flex flex-col justify-center items-center">
          {oppPlayer === "X" ? (
            <h1 className="text-3xl text-red-600 mb-4">Red Wins!</h1>
          ) : (
            <h1 className="text-3xl text-blue-600 mb-4">Blue Wins!</h1>
          )}
        </div>
      )}
      <h2 className="text-xl text-black mb-4">
        Player{" "}
        {currPlayer === "X" ? (
          <span className="text-red-600">Red</span>
        ) : (
          <span className="text-blue-600">Blue</span>
        )}
        s Turn
      </h2>
      <div
        onClick={gameOver ? null : handleClick}
        className="grid grid-cols-7 w-2/3 bg-blue-700 p-6 rounded-3xl"
      >
        {board.map((row, i) => {
          return row.map((ch, j) => {
            return (
              <div
                key={j}
                className={`${j === hoveredColumn ? "bg-blue-400 " : ""} ${
                  i === 0 ? "rounded-t-2xl" : ""
                }
                ${i === board.length - 1 ? "rounded-b-2xl" : ""}`}
                onMouseEnter={() => setHoveredColumn(j)}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                <Slots ch={ch} y={i} x={j} />
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}
