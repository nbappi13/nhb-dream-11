import React from 'react';
import PropTypes from 'prop-types';
import './PlayerCard.css';

const PlayerCard = ({ player, choosePlayer }) => {
  const getCountryCode = (country) => {
    const countryCodes = {
      India: 'in',
      Australia: 'au',
      England: 'gb',
      'New Zealand': 'nz',
      Afghanistan: 'af'
    };
    return countryCodes[country] || country.toLowerCase().slice(0, 2);
  };

  return (
    <div className="player-card">
      <img src={player.image} alt={player.name} className="card-player-image" />
      <div className="player-details">
        <div className="top-section">
          <div className="left-section">
            <h3 className="player-name">
              <i className="fa fa-user"></i> {player.name}
            </h3>
            <p className="player-country">
              <img 
                src={`https://flagcdn.com/16x12/${getCountryCode(player.country)}.png`} 
                alt={player.country} 
                className="country-flag" 
              />
              {player.country}
            </p>
          </div>
          <div className="right-section">
            <span className="player-role">{player.role}</span>
          </div>
        </div>
        <hr className="divider" />
        <div className="bottom-section">
          <div className="left-section">
            <p className="player-rating">Rating: <span>{player.rating}</span></p>
            {player.role === 'Batsman' ? (
              <p className="player-bowling">Bowling: <span>{player.bowlingType}</span></p>
            ) : (
              <p className="player-batting">Batting: <span>{player.battingType}</span></p>
            )}
            <p className="player-price">Price: <span>${player.biddingPrice.toLocaleString()}</span></p>
          </div>
          <div className="right-section">
            {player.role === 'Batsman' ? (
              <p className="player-batting">Batting: <span>{player.battingType}</span></p>
            ) : (
              <p className="player-bowling">Bowling: <span>{player.bowlingType}</span></p>
            )}
            <button onClick={() => choosePlayer(player)} className="choose-button">Choose</button>
          </div>
        </div>
      </div>
    </div>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.object.isRequired,
  choosePlayer: PropTypes.func.isRequired,
};

export default PlayerCard;
