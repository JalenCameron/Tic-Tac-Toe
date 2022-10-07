// Importing the css for the info about the Tic-Tac-Toe game
import "./css/info.css";

// Creating the Info component to hold Players 1 and 2
const Info = () => {
    return (
        <div className="info">
            <div className="player">Player 1: X</div>
            <div className="player">Player 2: O</div>
        </div>
    )
};

export default Info;