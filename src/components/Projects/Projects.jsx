import React from "react";
import blobs from "../../assets/blobs.png";
import bgsec from "../../assets/projectsec.png";
import jinx from "../../assets/jinx.png";
import powder from "../../assets/powder.png";
import eclipse from "../../assets/eclipse.gif";
import rings from "../../assets/rings.png";
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
       <div className="z-50"><Navbar /></div> 

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
              }}
            >
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
      <div className=" my-32">
        {/* projects section */}
        <div className="flex flex-wrap gap-5 justify-around">
          <div className="flex-col flex justify-around items-center rounded-lg border-4 border-[#824FEF] text-white text-center w-[90vw] md:w-[40vw] h-[50vh] p-12 ">
            <h3 className="text-4xl">356Games.net</h3>
            <p className="text-2xl">
              365Games – Bringing Gaming to Life Through Engaging Content
            </p>
          </div>
          <div className="flex-col flex justify-around items-center rounded-lg border-4 border-[#824FEF] text-white text-center w-[90vw] md:w-[40vw] h-[50vh] p-12 ">
            <h3 className="text-4xl">Arena PUBG Cup</h3>
            <p className="text-2xl">Bringing the Community Together</p>
          </div>
        </div>
      </div>
      <div className=" bg-[#000000] z-50">
      <div style={{ backgroundImage: `url(${bgsec})` }} className="bg-cover bg-center relative z-50">
        <p  className="text-center md:px-64 px-12 py-32 text-2xl md:text-4xl font-normal z-50 relative text-white mb-4"
              style={{
                WebkitTextStroke: "1px #5A3392", // Purple outline
                textShadow: "0 0 5px rgba(0, 0, 0, 0.7)", // Optional shadow for a subtle effect
              }}>Empowering Gaming Brands with Creative Content, Engaging Experiences, and Unforgettable Esports Events.</p>
      </div></div>
      <div className="flex justify-center -mt-32">
        <img className="block" src={eclipse} alt="eclipse" />
        <img className="block absolute -z-10" src={rings} alt="eclipse" />
      </div>
    </div>
  );
}
