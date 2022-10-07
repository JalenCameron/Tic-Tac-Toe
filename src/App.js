// Importing the Board component and the component used for Information
import Board from './Board';
import Info from './Info';
// Importing the CSS file
import './css/app.css'

// Also importing a useState hook
import {useState} from 'react';

function App() {
    // Creating a reset state which will be used to reset the game when applicable
    const [reset, setReset] = useState(false);
    // Creating a winner state which will determine the winner of the game
    const [winner, setWinner] = useState('');

    // Creating a function to clear the board and begin the reset process
    const resetBoard = () => {
        setReset(true);
    };

    return(
        <div className='app'>
            {/* Hiding the popup if there's no winner */}
            <div className={`winner ${winner !== '' ? '' : 'hide'}`}>
                {/* Displaying the current winner */}
                <div className='congratulations'>(winner)</div>
                {/* Button to reset the game whenever the User wants to */}
                <button onClick={() => resetBoard()}>
                    Reset Game
                </button>
            </div>

            {/* Board Game and Tic-Tac-Toe Information components */}
            <Board reset={reset}  setReset={setReset} winner={winner} setWinner={setWinner}/>
            <Info />
        </div>
    );
}

export default App;