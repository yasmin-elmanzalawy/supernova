import React from "react";
import moon from "../../assets/moon.png";
import charmoon from "../../assets/charmoon.png";
import "./Moon.css";
import star from "../../assets/semiministar.png";


export default function Moon() {

  const stars = Array.from({ length: 10 }, (_, i) => ({
    top: Math.random() * 700,
    left: Math.random() * window.innerWidth,
    delay: Math.random() * 2.5,
  }));


  return (
    <div>
      <div className="orbit-container rela md:w-[600px] md:h-[600px] lg:h-[880px] lg:w-[880px] w-96 h-96 m-auto md:mb-0 mb-[600px] ">
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
        
        <div className="orbit orbit-1"></div>
        <div className="orbit orbit-2"></div>
        <div className="orbit orbit-3">
          <img src={moon} />
        </div>
        <div className="orbit orbit-4"></div>
        <div className="moon"></div>
        <div className=" md:bg-[rgba(0,0,0,0.6)] md:border md:border-[#5b3392c9] md:rounded-xl relative">
          <div className="flex gap-3 h-[60vh] justify-center items-center md:w-[80vw] w-[60vw]  md:m-6 md:flex-nowrap flex-wrap py-24">
            <div className="bg-[rgba(0,0,0,0.5)] text-white border-s border-b rounded-xl md:w-[33%] px-4 py-12 my-5  md:m-6 border-[#5b3392c9] relative">
              <p className="text-7xl font-extrabold text-start absolute top-[-50px] bg-gradient-to-b from-purple-500 to-black bg-clip-text text-transparent">
                1
              </p>
              <h3 className="text-2xl md:text-3xl py-4">
                Customized Solutions
              </h3>
              <p>
                We tailor our services to meet each client's needs, helping them
                grow and achieve their goals within their budget.
              </p>
            </div>

            <div className="bg-[rgba(0,0,0,0.5)] text-white border-s border-b rounded-xl px-4 py-12 my-5 md:w-[33%]  md:m-6  border-[#5b3392c9] relative z-50">
              <p className="text-7xl font-extrabold text-start absolute top-[-50px] bg-gradient-to-b from-purple-500 to-black bg-clip-text text-transparent">
                2
              </p>
              <h3 className="text-2xl md:text-3xl py-4">Enhanced Experience</h3>
              <p>
                We ensure top-quality solutions that elevate the gaming
                experience.
              </p>
            </div>

            <div className="bg-[rgba(0,0,0,0.5)] text-white border-s border-b rounded-xl px-4 py-12 my-5 md:w-[33%] md:m-6 border-[#5b3392c9] relative z-50">
              <p className="text-7xl font-extrabold text-start absolute top-[-50px] bg-gradient-to-b from-purple-500 to-black bg-clip-text text-transparent">
                3
              </p>
              <h3 className="text-2xl md:text-3xl py-4">Core Values</h3>
              <p>
                We prioritize innovation, collaboration, quality, expertise, and
                integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
          <div className="absolute left-0 md:bottom-[280px] bottom-[120px]">
            <img className="block" src={charmoon} alt="" />
          </div>
    </div>
  );  
}
