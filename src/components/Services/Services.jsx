import React from "react";
import servicesbg from "../../assets/servivesbg.png";
import servicesmask from "../../assets/servicesmask.png";
import star from "../../assets/semiministar.png";
import Navbar from "../Navbar/Navbar";
import "./Services.css";
import { div } from "framer-motion/client";

export default function Services() {
  // Generate 10 random stars
  const stars = Array.from({ length: 10 }, (_, i) => ({
    top: Math.random() * 700, // adjust this based on your div height
    left: Math.random() * window.innerWidth, // full screen width
    delay: Math.random() * 2.5, // between 0 and 2.5s
  }));

  return (
    <div>
      <div
        className="relative bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${servicesbg})` }}
      >
        <Navbar />

        {/* Shooting stars */}
        {stars.map((starItem, index) => (
          <img
            key={index}
            src={star}
            alt="star"
            className="star"
            style={{
              top: `${starItem.top}px`,
              left: `${starItem.left}px`,
              animationDelay: `${starItem.delay}s`,
            }}
          />
        ))}

        <div>
          <h2 className="text-center text-4xl font-bold text-white py-5">
            Our services
          </h2>
          <p className="text-center text-white text-xl">
            Customizable Services that suit your needs
          </p>
          <img
            className="w-[350px] m-auto"
            src={servicesmask}
            alt="masked face"
          />
        </div>
      </div>
      {/* <div className="bg-[#000000] flex justify-center" >
        <div className="bg-purple-300 w-[300px] md:w-[600px] h-[300px] flex justify-center items-center flex-col m-5 rounded-xl">
          <h3 className="py-5">GAMING COMMUNITY MANAGEMENT</h3>
          <p className="mx-5">SEAMLESS SETUP, EFFICIENT MANAGEMENT, AND VALUABLE CONSULTATION FOR GAMING
          COMMUNITIES, AND DISCORD SERVERS</p>
        </div>
       
      </div> */}
    </div>
  );
}
