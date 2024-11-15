import React, { useState } from "react";

const Navbar = () => {
  const [coins, setCoins] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-950">
      <div className="flex items-center space-x-3">
        <img src="/src/assets/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="text-xl font-bold italic text-white cursor-pointer">
          NHB Cric
        </span>
      </div>

      <ul className="hidden md:flex space-x-6 text-emerald-50">
        <li className="hover:text-pink-400 cursor-pointer">Home</li>
        <li className="hover:text-pink-400 cursor-pointer">Fixture</li>
        <li className="hover:text-pink-400 cursor-pointer">Teams</li>
        <li className="hover:text-pink-400 cursor-pointer">Schedules</li>
      </ul>

      <div className="block md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-3xl p-2"
        >
          <span className="block w-6 h-1 bg-white my-1"></span>
          <span className="block w-6 h-1 bg-white my-1"></span>
          <span className="block w-6 h-1 bg-white my-1"></span>
        </button>
      </div>

      <div className="flex items-center border px-3 py-1 rounded-full bg-gray-100">
        <span className="mr-1">{coins} Coin</span>
        <img
          src="https://img.icons8.com/fluency/60/cheap-2--v1.png"
          alt="Coin Icon"
          className="h-4 w-4"
        />
      </div>

      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-blue-950 text-emerald-50 space-y-4 px-6 py-4 sm:hidden md:hidden lg:hidden xl:hidden">
          <li className="hover:text-pink-400 cursor-pointer">Home</li>
          <li className="hover:text-pink-400 cursor-pointer">Fixture</li>
          <li className="hover:text-pink-400 cursor-pointer">Teams</li>
          <li className="hover:text-pink-400 cursor-pointer">Schedules</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
