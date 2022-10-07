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
        if (data[index - 1] === '' && winner === '' ) {

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

};