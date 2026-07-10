import React from "react";
import Banner from "../assets/orange-pattern";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Subscribe = () => {
  return (
    <div data-aso="zoom-in" className=" bg-gray-100 dark:bg-gray-800 text-white     ">
      <div></div>
    </div>
  );
};

export default Subscribe;
