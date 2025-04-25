export default function GameOver({ winner, onPlayAgain }) {
	return (
		<div id="game-over">
			<h2>Game Over!</h2>
			<p>{winner ? `${winner} won!` : "It's a draw!"}</p>
			<button onClick={onPlayAgain}>Play Again!</button>
		</div>
	);
}