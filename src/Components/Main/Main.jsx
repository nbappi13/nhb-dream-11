import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlayerList from '../PlayerList/PlayerList';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';
import './Main.css';

const Main = ({ choosePlayer, selectedPlayers, deletePlayer }) => {
  const [view, setView] = useState('available');
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('/playersData.json')
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(error => console.error('Error fetching player data:', error));
  }, []);

  const filteredPlayers = view === 'available' ? players : selectedPlayers;

  return (
    <div className="main-section">
      <div className="header">
        <h2 className='font-bold text-2xl text-black'>Player List</h2>
        <div className="button-group">
          <button onClick={() => setView('available')}>Available</button>
          <button onClick={() => setView('selected')}>
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      {view === 'available' && (
        <PlayerList players={filteredPlayers} choosePlayer={choosePlayer} />
      )}
      {view === 'selected' && (
        <>
          <h2 className='font-bold text-2xl text-black'>Selected Player {selectedPlayers.length}/6</h2>
          <SelectedPlayers selectedPlayers={selectedPlayers} deletePlayer={deletePlayer} />
          <button className="add-more-button" onClick={() => setView('available')}>Add More Players</button>
        </>
      )}
    </div>
  );
};

Main.defaultProps = {
  choosePlayer: () => console.warn('choosePlayer function not provided'),
  selectedPlayers: [],
  deletePlayer: () => console.warn('deletePlayer function not provided'),
};

Main.propTypes = {
  choosePlayer: PropTypes.func,
  selectedPlayers: PropTypes.arrayOf(PropTypes.object),
  deletePlayer: PropTypes.func,
};

export default Main;
