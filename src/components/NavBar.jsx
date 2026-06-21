import React from "react";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      {/* Upper Navbar */}
      <div>
        <div>
          <div>
            <a href="#">
              <img src={Logo} alt="Brand Logo" 
              className="w-10" />
              Shopy
            </a>
          </div>
          {/* search and order button */}
          <div>
            <div>
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300
                px-2 py-1 focus:outline-none focus:border focus:border-primary
                
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
