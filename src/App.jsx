import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import "font-awesome/css/font-awesome.min.css";

function App() {
  const [coins, setCoins] = useState(0);

  const addCoins = () => {
    setCoins(coins + 50000000); 
  };

  return (
    <>
      <Header coins={coins} addCoins={addCoins} />
    </>
  );
}

export default App;
