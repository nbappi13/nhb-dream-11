import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../PlayerCard/PlayerCard';
import './PlayerList.css';

const PlayerList = ({ players, choosePlayer, view }) => {
  return (
    <div className="player-list">
      {players.map((player) => (
        <PlayerCard key={player.playerId} player={player} choosePlayer={choosePlayer} view={view} />
      ))}
    </div>
  );
};

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  choosePlayer: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
};

export default PlayerList;
