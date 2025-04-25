# React Tic-Tac-Toe

This is a simple Tic-Tac-Toe game built with React. The project was created as a learning exercise to explore the fundamentals of React, including components, state management, and event handling.

## Features

- Two-player Tic-Tac-Toe game.
- Players can edit their names.
- Highlights the active player.
- Displays a log of moves.
- Detects the winner or a draw.
- Option to restart the game after it ends.

## Project Structure

The project is organized as follows:

```
src/
├── App.jsx               # Main application component
├── index.jsx             # Entry point for the React app
├── assets/               # Static assets (images, styles, etc.)
│   └── styles/
│       └── index.css     # CSS styles for the application
├── constants/            # Constants used across the application
│   └── gameConstants.js  # Game constants (players, board, winning combinations)
├── utils/                # Utility functions
│   └── deriveFunctions.js # Functions to derive game state
├── components/           # Reusable React components
│   ├── GameBoard.jsx     # Game board component
│   ├── GameOver.jsx      # Game over screen component
│   ├── Log.jsx           # Move log component
│   └── Player.jsx        # Player component
```

## Getting Started

To start the development server:

1. Run the following command in the project directory:
	```bash
	npm run dev
	```
2. Open the application in your browser at [http://localhost:5173](http://localhost:5173).

## Technologies Used

- React
- Vite (for development and build)
- CSS for styling

## Learning Objectives

This project was created to practice:

- Building reusable React components.
- Managing state with React's `useState` hook.
- Handling user interactions and events.
- Structuring a React project.

## Future Improvements

- Add support for AI to play against the computer.
- Improve the UI/UX with animations and better responsiveness.
- Add unit tests for core functionality.

## License

This project is for educational purposes and is not licensed for commercial use.