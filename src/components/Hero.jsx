import React from "react";
import Women from "../assets/women.png";
import shopping from "../assets/shopping.png";
import sale from "../assets/sale.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AOS from "aos";

const imageList = [
  {
    id: 1,
    img: Women,
    title: "Upto 50% off on all Women's Wear",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente et, commodi ut recusandae dolorem provident voluptate est eligendi magni! Vitae sint aperiam perspiciatis dicta a, nemo laboriosam sequi modi ipsam",
  },

  {
    id: 2,
    img: shopping,
    title: "30% off on all Women's Wear",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente et, commodi ut recusandae dolorem provident voluptate est eligendi magni! Vitae sint aperiam perspiciatis dicta a, nemo laboriosam sequi modi ipsam",
  },

  {
    id: 3,
    img: sale,
    title: "70% off on all Women's Wear",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente et, commodi ut recusandae dolorem provident voluptate est eligendi magni! Vitae sint aperiam perspiciatis dicta a, nemo laboriosam sequi modi ipsam",
  },
];

const Hero = ({ handleOrderPopup }) => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* Background  pattern*/}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 "></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Swiper
          modules={[Autoplay]}
          loop={false}
          speed={800}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          // onSlideChangeTransitionEnd={() => {
          //   AOS.refresh();
          // }}
        >
          {imageList.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left sm:order-1 order-2 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order
                    </button>
                  </div>
                </div>
                {/* image section  */}
                <div className=" order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative"
                  >
                    <img
                      src={data.img}
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 object-contain mx-auto"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
