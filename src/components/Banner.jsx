import React from "react";
import BannerImg from "../assets/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="gird grid-cols-1 sm:grid-cols-1 gap-6 items-center">
          {/* Image Section */}
          <div>
            <img src={BannerImg} alt="" />
          </div>
          {/* details section */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
