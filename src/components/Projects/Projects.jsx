import React from "react";
import blobs from "../../assets/blobs.png";
import jinx from "../../assets/jinx.png";
import powder from "../../assets/powder.png";
import Navbar from "../Navbar/Navbar";

export default function Projects() {
  return (
    <div className="relative bg-[#000000] min-h-screen overflow-hidden">
      {/* Full Background Container including Navbar, images, text */}
      <div
        style={{ backgroundImage: `url(${blobs})` }}
        className="bg-cover bg-center min-h-screen flex flex-col"
      >
        {/* Navbar normally positioned at the top */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center relative ">
          {/* Left Image */}
          <img
            src={powder}
            alt="Powder"
            className="h-[50vh] md:h-[100vh] object-contain md:absolute md:left-10 md:top-1/2 md:translate-y-[-60%] top-20 left-5"
          />

          {/* Center Text */}
          <div className="text-center z-10 px-4 mt-10 md:mt-0">
            <h3
              className="text-4xl md:text-8xl font-medium text-white mb-4"
              style={{
                WebkitTextStroke: "2px #5A3392", // Purple outline
                textShadow: "0 0 5px rgba(0, 0, 0, 0.7)", // Optional shadow for a subtle effect
              }}
            >
              Our Past Projects
            </h3>

            <p
            className="text-2xl md:text-5xl font-normal text-white mb-4"
            style={{
              WebkitTextStroke: "1px #5A3392", // Purple outline
              textShadow: "0 0 5px rgba(0, 0, 0, 0.7)", // Optional shadow for a subtle effect
              }}>
              Elevating Gaming Through Content & Esports
            </p>
          </div>

          {/* Right Image */}
          <img
            src={jinx}
            alt="Jinx"
            className="h-[50vh] md:h-[100vh]  md:d-block object-contain md:absolute md:right-10 md:bottom-1/2 md:translate-y-[40%] bottom-0 right-5"
          />
        </div>
      </div>
    </div>
  );
}
