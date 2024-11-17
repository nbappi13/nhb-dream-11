import React from 'react';
import PropTypes from 'prop-types'; 
import PlayerCard from '../PlayerCard/PlayerCard';
import './PlayerList.css';

const PlayerList = ({ players, choosePlayer }) => {

  const safePlayers = Array.isArray(players) ? players : [];

  return (
    <div className="player-list">
      {safePlayers.length > 0 ? (
        safePlayers.map(player => (
          <PlayerCard key={player.playerId} player={player} choosePlayer={choosePlayer} />
        ))
      ) : (
        <p className="no-players">No players available</p> 
      )}
    </div>
  );
};


PlayerList.defaultProps = {
  players: [],
  choosePlayer: () => console.warn('choosePlayer function not provided'),
};


PlayerList.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      playerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string,
    })
  ),
  choosePlayer: PropTypes.func,
};

export default PlayerList;
