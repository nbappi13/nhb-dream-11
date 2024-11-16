import React from "react";

const Navbar = ({ coins }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-950">
      <div className="flex items-center space-x-3">
        <img src="/src/assets/logo.png" alt="Logo" className="h-10 w-10" />
        <span className="text-xl font-bold italic text-white cursor-pointer">
          NHB CRIČ
        </span>
      </div>

      <ul className="hidden md:flex space-x-6 text-emerald-50">
        <li className="hover:text-pink-400 cursor-pointer">Home</li>
        <li className="hover:text-pink-400 cursor-pointer">Fixture</li>
        <li className="hover:text-pink-400 cursor-pointer">Teams</li>
        <li className="hover:text-pink-400 cursor-pointer">Schedules</li>
      </ul>

      <div className="flex items-center border px-3 py-1 rounded-full bg-gray-100">
        <span className="mr-1">{coins} Coin</span>
        <img
          src="https://img.icons8.com/fluency/60/cheap-2--v1.png"
          alt="Coin Icon"
          className="h-4 w-4"
        />
      </div>
    </nav>
  );
};

export default Navbar;
