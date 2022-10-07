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



    return(
        <></>
    );
}

export default App;