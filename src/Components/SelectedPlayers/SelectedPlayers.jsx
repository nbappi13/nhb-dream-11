import React from "react";
import PropTypes from "prop-types";
import "./SelectedPlayers.css";

const SelectedPlayers = ({ selectedPlayers, deletePlayer }) => {
  return (
    <div className="selected-players">
      {selectedPlayers.length > 0 ? (
        selectedPlayers.map((player) => (
          <div key={player.playerId} className="selected-player-card">
            <div className="player-info">
              <img
                src={player.image}
                alt={player.name}
                className="selected-player-image"
              />
              <div>
                <h3>{player.name}</h3>
                <p>{player.role}</p>
                <p>Price: ${player.biddingPrice.toLocaleString()}</p>
              </div>
            </div>
            <button
              className="delete-button"
              onClick={() => deletePlayer(player.playerId)} 
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="font-bold text-red-400 text-3xl">📢 No players selected right now.📢 </p>
      )}
    </div>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.arrayOf(
    PropTypes.shape({
      playerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string,
      biddingPrice: PropTypes.number.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
  deletePlayer: PropTypes.func.isRequired,
};

export default SelectedPlayers;
