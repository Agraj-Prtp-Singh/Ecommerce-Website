import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero.jsx";
import Products from "./components/Products.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div>
      <NavBar />
      <Hero />
      <Products />
    </div>
  );
};

export default App;
