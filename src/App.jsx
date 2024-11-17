import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "font-awesome/css/font-awesome.min.css";

const App = () => {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const addCoins = () => {
    setCoins(coins + 5000000);
  };

  const choosePlayer = (player) => {
    if (!selectedPlayers.includes(player)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  return (
    <>
      <Header coins={coins} addCoins={addCoins} />
      <Main choosePlayer={choosePlayer} selectedPlayers={selectedPlayers} />
    </>
  );
};

export default App;
