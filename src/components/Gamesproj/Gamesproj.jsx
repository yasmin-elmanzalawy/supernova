import React from "react";
import bg from "../../assets/gamesbg.png";
import blobs from "../../assets/blobs.png";
import banner from "../../assets/banner.png";
import mobile from "../../assets/mobile.png";
import colab from "../../assets/colab.png";
import thndr from "../../assets/thndr.png";
import Navbar from "../Navbar/Navbar";

export default function Gamesproj() {
  return (
    <div>
      <div
        className="hero-section h-screen bg-cover bg-[position:30%] md:bg-[position:20%] lg:bg-[position:0%]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] opacity-60"></div>
        <div className="z-3 relative">
          <Navbar />
        </div>
      </div>
      <div className="bg-black text-white">
        <div
          style={{ backgroundImage: `url(${blobs})` }}
          className="bg-cover bg-center min-h-screen flex flex-col"
        >
          <div>
            {" "}
            <p
              className="text-center md:px-64 px-12 py-32 text-2xl md:text-4xl font-normal z-50 relative text-white "
              style={{
                WebkitTextStroke: "1px #5A3392", // Purple outline
                textShadow: "0 0 5px rgba(0, 0, 0, 0.7)", // Optional shadow for a subtle effect
              }}
            >
              365Games – Bringing Gaming to Life Through Engaging Content
            </p>
          </div>
          <div>
            <div>
                <img src="" alt="" />
                <h3></h3>
                <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
