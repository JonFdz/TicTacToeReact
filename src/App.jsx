import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";

    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }

    return currentPlayer;
}

function App() {
    const [players, setPlayers] = useState({
        X: "Player 1",
        O: "Player 2",
    });

    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    function handleStartGame() {
        setGameStarted(true);
    }
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = [...initialGameBoard.map((array) => [...array])];

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    let winner;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol =
            gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol =
            gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol =
            gameBoard[combination[2].row][combination[2].column];

        if (
            firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            winner = players[firstSquareSymbol];
        }
    }

    const hasDrawn = gameTurns.length === 9 && !winner;

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

    function handleEditPlayerName(player, newName) {
        setPlayers((prevPlayers) => {
            return {
                ...prevPlayers,
                [player]: newName,
            };
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName="Player 1"
                        symbol="X"
                        isActive={activePlayer === "X"}
						onEditPlayerName={handleEditPlayerName}
                    />
                    <Player
                        initialName="Player 2"
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
