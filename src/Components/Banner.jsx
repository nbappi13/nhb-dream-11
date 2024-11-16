import React from "react";
import "./Banner.css";

const Banner = ({ addCoins }) => {
  return (
    <div className="banner-container">
      <img
        src="/src/assets/bg-shadow.png"
        alt="Background Shadow"
        className="bg-shadow"
      />
      <div className="content-container">
        <img
          src="/src/assets/banner-main.png"
          alt="Banner Main"
          className="banner-main"
        />
        <div className="text-container">
          <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <h2>Beyond Boundaries, Beyond Limits</h2>
          <button onClick={addCoins}>Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
