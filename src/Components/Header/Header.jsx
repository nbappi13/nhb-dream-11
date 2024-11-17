import React from "react";
import Navbar from "./Navbar";
import Banner from "../Banner/Banner";


const Header = ({ coins, addCoins }) => {
  return (
    <header>
      <Navbar coins={coins} />
      <Banner addCoins={addCoins}></Banner>
    </header>
  );
};

export default Header;
