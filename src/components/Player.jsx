import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onEditPlayerName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
		if (isEditing) {
			onEditPlayerName(symbol, playerName);
		}
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {isEditing ? (
                    <input
                        type="text"
                        value={playerName}
                        onChange={handleNameChange}
                        requiered
                    />
                ) : (
                    <span className="player-name">{playerName}</span>
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}
