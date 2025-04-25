import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { PLAYERS } from "./constants.js";
import { deriveActivePlayer, deriveGameBoard, deriveWinner } from "./derivefunctions.js";

function App() {
    const [players, setPlayers] = useState(PLAYERS);
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);
	const gameBoard = deriveGameBoard(gameTurns);
	const winner = deriveWinner(gameBoard, players);
    const hasDrawn = gameTurns.length === 9 && !winner;

	function handleEditPlayerName(player, newName) {
        setPlayers((prevPlayers) => {
            return {
                ...prevPlayers,
                [player]: newName,
            };
        });
    }

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns((prevGameTurns) => {
            const currentPlayer = deriveActivePlayer(prevGameTurns);

            const updatedTurn = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer,
                },
                ...prevGameTurns,
            ];

            return updatedTurn;
        });
    }

    function handlePlayAgain() {
        setGameTurns([]);
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName={PLAYERS.X}
                        symbol="X"
                        isActive={activePlayer === "X"}
						onEditPlayerName={handleEditPlayerName}
                    />
                    <Player
                        initialName={PLAYERS.O}
                        symbol="O"
                        isActive={activePlayer === "O"}
						onEditPlayerName={handleEditPlayerName}
                    />
                </ol>
                {(winner || hasDrawn) && (
                    <GameOver winner={winner} onPlayAgain={handlePlayAgain} />
                )}
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    board={gameBoard}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App;
