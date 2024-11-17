import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import './PlayerList.css';

const PlayerList = ({ players, choosePlayer }) => {
  return (
    <div className="player-list">
      {players.map(player => (
        <PlayerCard key={player.playerId} player={player} choosePlayer={choosePlayer} />
      ))}
    </div>
  );
};

export default PlayerList;
