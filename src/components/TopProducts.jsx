import React from "react";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat quam accusantium consequatur fuga, blanditiis minus nemo expedita aut quod.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat quam accusantium consequatur fuga, blanditiis minus nemo expedita aut quod.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat quam accusantium consequatur fuga, blanditiis minus nemo expedita aut quod.",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <div className="text-left mb-10 ">
          {" "}
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sit eum
            culpa?
          </p>
        </div>
        {/* Body Section */}
        <div>
          {ProductsData.map((data) => {
            <div></div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
