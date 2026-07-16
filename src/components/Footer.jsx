import React from "react";
import footerLogo from "../assets/logo.png";
import Banner from "../assets/footer-pattern1.png";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#",
  },
  {
    title: "Blog",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mb-20">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left mb-3 flex items-center gap-3">
              Shopy
            </h1>
            <img src={footerLogo} alt="Shopy-Logo" />
            <p className="text-jus">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              provident omnis, atque asperiores, voluptatem eveniet suscipit
              facilis eius dolore, numquam sequi quis animi porro cumque ipsa at
              id tenetur debitis!
            </p>
          </div>
          {/* footer links */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
