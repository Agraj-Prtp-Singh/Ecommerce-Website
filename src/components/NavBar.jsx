import React from "react";
import Logo from "../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },

  {
    id: 2,
    name: "Top rated",
    link: "/services",
  },

  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },

  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const NavBar = () => {
  return (
    <div
      className="shadow-md bg-white 
      dark:bg-gray-900 dark:text-white duration-200 relative z-40
    "
    >
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Brand Logo" className="w-10" />
              Shopy
            </a>
          </div>
          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300
                px-2 py-1 focus:outline-none focus:border focus:border-primary
                bg-white
                "
              />
              <IoMdSearch
                className="text-gray-500 
              group-hover:text-primary absolute top-1/2 right-3 -translate-y-1/2"
              />
            </div>
            {/* order button */}
            <button
              onClick={() => alert("Ordering is not available right now")}
              className="bg-gradient-to-r from-primary to-secondary
             text-white py-1 px-4 rounded-full flex items-center
             gap-2 group cursor-pointer overflow-hidden"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>

              <FaCartShopping className="text-xl text-white" />
            </button>
            {/* Dark mode */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a className="hover:bg-gray-200" href={data.link}>{data.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
