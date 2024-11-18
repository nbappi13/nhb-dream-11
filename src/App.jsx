import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "font-awesome/css/font-awesome.min.css";
import Footer from "./Components/Footer/Footer";
import { toast } from "react-toastify";

const App = () => {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const addCoins = () => {
    setCoins(coins + 5000000);
  };

  const choosePlayer = (player) => {
    if (coins < player.biddingPrice) {
      toast.warn("Not enough money to buy this player. Claim some credit!");
      return;
    }

    if (!selectedPlayers.some(p => p.playerId === player.playerId)) {
      setSelectedPlayers([...selectedPlayers, player]);
      setCoins(coins - player.biddingPrice);
      toast.success(`Now ${player.name} is in your team`);
    }
  };

  return (
    <>
      <Header coins={coins} addCoins={addCoins} />
      <Main choosePlayer={choosePlayer} selectedPlayers={selectedPlayers} />
      <Footer />
    </>
  );
};

export default App;
