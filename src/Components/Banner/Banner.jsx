import React from "react";
import "./Banner.css";
import bannerMain from '../../assets/banner-main.png';
import { toast } from "react-toastify";

const Banner = ({ addCoins }) => {
  const handleClaimClick = () => {
    addCoins(); 
    toast.success("You claimed 5000000!"); 
  };

  return (
    <div className="banner-container">
      <img
        src="/src/assets/bg-shadow.png"
        alt="Background Shadow"
        className="bg-shadow"
      />
      <div className="content-container">
        <img
          src={bannerMain} 
          alt="Banner Main" 
          className="banner-main"
        />
        <div className="text-container">
          <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <h2>Beyond Boundaries, Beyond Limits</h2>
          <button onClick={handleClaimClick}>Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
