import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { toast } from "react-toastify";

const App = () => {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const addCoins = () => {
    setCoins(coins + 5000000);
  };

  const choosePlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.warn("You cannot choose more than 6 players.");
      return;
    }

    if (selectedPlayers.some(p => p.playerId === player.playerId)) {
      toast.warn("Player already selected.");
      return;
    }

    if (coins < player.biddingPrice) {
      toast.warn("Not enough money to buy this player. Claim some credit!");
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins - player.biddingPrice);
    toast.success(`Now ${player.name} is in your team`);
  };

  const deletePlayer = (playerId) => {
    const player = selectedPlayers.find((p) => p.playerId === playerId);
    const updatedPlayers = selectedPlayers.filter(
      (player) => player.playerId !== playerId
    );
    setSelectedPlayers(updatedPlayers);
    toast.success(`${player.name} removed from your team.`);
  };

  return (
    <>
      <Header coins={coins} addCoins={addCoins} />
      <Main 
        choosePlayer={choosePlayer} 
        selectedPlayers={selectedPlayers} 
        deletePlayer={deletePlayer} 
      />
      <Footer />
    </>
  );
};

export default App;
