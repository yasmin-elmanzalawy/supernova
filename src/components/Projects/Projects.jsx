import React from 'react';
import blobs from '../../assets/blobs.png';
import jinx from '../../assets/jinx.png';
import powder from '../../assets/powder.png';
import Navbar from '../Navbar/Navbar';

export default function Projects() {
  return (
    <div className="relative bg-[#000000] min-h-screen">
      <Navbar /> 
      {/* Navbar at the top */}

      {/* Background container */}
      <div
        style={{ backgroundImage: `url(${blobs})` }}
        className="py-12 flex flex-col md:flex-row items-center justify-center bg-cover bg-center relative overflow-hidden min-h-screen"
      >
        {/* Left Image on Desktop / Top on Mobile */}
        <img
          src={powder}
          alt="Powder"
          className="h-[40vh] absolute md:top-1/2 md:translate-y-[-50%] top-[20px] left-[10px] object-contain md:h-[80vh]"
        />

        {/* Center Text */}
        <div className="text-center z-10 px-4">
          <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 mb-4">
            Our Past Projects
          </h3>
          <p className="text-white text-lg md:text-xl">
            Elevating Gaming Through Content & Esports
          </p>
        </div>

        {/* Right Image on Desktop / Bottom on Mobile */}
        <img
          src={jinx}
          alt="Jinx"
          className="h-[50vh] absolute right-[10px] bottom-0 md:bottom-1/2 md:translate-y-[50%] object-contain md:h-[80vh]"
        />
      </div>
    </div>
  );
}
