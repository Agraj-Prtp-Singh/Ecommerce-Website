import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero.jsx";
import Products from "./components/Products.jsx";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  });
  return (
    <div>
      <NavBar />
      <Hero />
      <Products />
    </div>
  );
};

export default App;
App;
