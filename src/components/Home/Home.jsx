import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import heroBg from "../../assets/herobg.jpg";
import leftArrow from "../../assets/leftarrow.png";
import rightArrow from "../../assets/rightarrow.png";
import homeSec2 from "../../assets/home-sec2.png";
import { Link } from "react-router-dom";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <div
        className="hero-section h-screen bg-cover bg-[position:30%] md:bg-[position:20%] lg:bg-[position:0%]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="z-3 relative">
          <Navbar />
          <div className="flex flex-col justify-center items-center text-white h-[70vh] text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold m-5">
              SUPERNOVA GAMING
            </h1>
            <p className="text-3xl md:text-6xl font-light m-5">
              PARALLEL UNIVERSE FOR GAMERS
            </p>

            <div
              className="relative flex items-center justify-center w-full max-w-2xl mt-12"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Left Arrow */}
              <img
                src={leftArrow}
                alt="Left Arrow"
                className={`w-12 sm:w-20 transition-transform duration-500 ${
                  hovered ? "-translate-x-24 -mr-2" : "-mr-6"
                } relative top-4`}
              />

              {/* Expanding White Line */}
              <div
                className={`h-2 sm:h-4 bg-white transition-all duration-500 ${
                  hovered ? "w-24 sm:w-50 opacity-100" : "w-0 opacity-0"
                }`}
              ></div>

              {/* Right Arrow */}
              <img
                src={rightArrow}
                alt="Right Arrow"
                className={`w-12 sm:w-20 transition-transform duration-500 ${
                  hovered ? "translate-x-24 -ml-2" : "-ml-6"
                } relative -top-4`}
              />
            </div>
          </div>
        </div>
      </div>
      {/* second container */}
    
    </div>
  );
}
