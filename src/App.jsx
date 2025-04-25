import Player from './components/Player.jsx'

function App() {

	return (
		<main>
			<div id="game-container">
				<ol id="players">
					<li className="player">
						<Player initialName="Player 1" symbol="X" />
					</li>
					<li className="player">
						<Player initialName="Player 2" symbol="O" />
					</li>
				</ol>
			</div>
		</main>
	)
}

export default App
