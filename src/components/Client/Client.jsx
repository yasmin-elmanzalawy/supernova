import React from "react";
import blobs from "../../assets/blobs.png";
import ClientCarousel from "../ClientCarousel/ClientCarousel";
import Navbar from "../Navbar/Navbar";



export default function Client() {
  return (
    <div>
      <div className="bg-[#000000] overflow-hidden text-white">
        <div
          style={{ backgroundImage: `url(${blobs})` }}
          className="bg-cover flex flex-col"
        > <div className="z-50">
                  <Navbar />
                </div>
           <h2 className="text-center text-4xl font-bold mt-24 md:mt-12 py-8">
            Our Clients 
          </h2>
          <p className="text-center text-xl">Step into the world of Supernova Games—where innovation meets adventure</p>
          <div className="my-12">
          <ClientCarousel></ClientCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
