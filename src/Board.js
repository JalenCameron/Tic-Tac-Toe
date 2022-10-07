// Importing the CSS for the board 
import "./css/board.css";

// Importing the useState hook, useEffect hook and useRef hook
import { useState, useEffect, useRef } from "react";

// Creating a variable to contain the Board data
const Board = ({ reset, setReset, winner, setWinner }) => {
  // Creating a turn state to indicate who's turn it is
  const [turn, setTurn] = useState(0);

  // Creating a data state to contain the current data of the Board (3x3x3)
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  // Creating a reference for the Board itself
  const boardReference = useRef(null);

  // Creating a function to place an X or O on the board
  const draw = (event, index) => {
    // As long as position is not taken and a winner has not been determined
    if (data[index - 1] === "" && winner === "") {
      // Places an X if it's Player 1's turn. Otherwise an O will be placed
      const current = turn === 0 ? "X" : "O";

      // Updating the Data state
      data[index - 1] = current;

      // Placing an X or O on the Board
      event.target.innerText = current;

      // Switching the turn after every placement
      setTurn(turn === 0 ? 1 : 0);
    }
  };

  // Using the useEffect Hook to reset the board whenever a winner is decided
  useEffect(() => {
    // Clearing the data state of all X's and O's
    setData(["", "", "", "", "", "", "", "", ""]);

    // Calling all the children/cells of the board
    const cells = boardReference.current.children;

    // Creating a loop for clearing the Board
    for (let i = 0; i < 9; i++) {
      cells[i].innerText = "";
    }

    // Resetting the turn to player 0
    setTurn(0);

    // Resetting the winner of the game
    setWinner("");
    setReset(false);
  }, [reset, setReset, setWinner]);

  // Using the useEffect Hook to check for a winner every round
  useEffect(() => {
    // Condition to check for the win in each row
    const checkRow = () => {
        let answer = false;
        for (let i = 0; i < 9; i += 3) {
            answer |= (data[i] === data[i + 1] &&
            data[i] === data[i + 2] &&
            data[i] !== '')
        };
        return answer;
    }

    // Condition to check for the win in each column
    const checkColumn = () => {
        let answer = false;
        for (let i = 0; i < 3; i++) {
            answer |= data[i] === data[i + 3] &&
            data[i] === data[i + 6] &&
            data[i] !== "";
        }
        return answer;
    };

    // Condition to check for the win if it's diagonal
    const checkDiagonal = () => {
        return (
          (data[0] === data[4] && data[0] === data[8] && data[0] !== "") ||
          (data[2] === data[4] && data[2] === data[6] && data[2] !== "")
        );
    };

    // Condition to check if there's any win at all using the functions created
    const checkWin = () => {
        return (checkRow() || checkColumn() || checkDiagonal());
    };

    // Condition to check for a tie
    const checkTie = () => {
        let count = 0;
        data.forEach((cell) => {
            if (cell !== '') {
                count++;
            }
        })
        return count === 9;
    };

    // Setting the winner if there's a win
    if (checkWin()) {
        setWinner(turn === 0 ? "Player 2 Wins!" : "Player 1 Wins!");
    } else if (checkTie()) {
        setWinner("It's a Tie!");
    };
  })
  
  return (
    <div ref={boardReference} className="board">
      <div className="input input-1" onClick={(e) => draw(e, 1)}></div>
      <div className="input input-2" onClick={(e) => draw(e, 2)}></div>
      <div className="input input-3" onClick={(e) => draw(e, 3)}></div>
      <div className="input input-4" onClick={(e) => draw(e, 4)}></div>
      <div className="input input-5" onClick={(e) => draw(e, 5)}></div>
      <div className="input input-6" onClick={(e) => draw(e, 6)}></div>
      <div className="input input-7" onClick={(e) => draw(e, 7)}></div>
      <div className="input input-8" onClick={(e) => draw(e, 8)}></div>
      <div className="input input-9" onClick={(e) => draw(e, 9)}></div>
    </div>
  );
};

export default Board;