import React, { useState } from "react";
import LightButton from "../assets/light-mode-button.png";
import DarkButton from "../assets/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  return (
    <div className="relative">
      <img
        src={LightButton}
        alt="light_button"
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] 
        transition-all duration-300 absolute z-40 "
      />
      <img
        src={DarkButton}
        alt=""
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] 
        transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
