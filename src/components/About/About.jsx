import React, { useState, useEffect } from "react";
import blobs from "../../assets/blobs.png";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/aboutlogo.png";


function Counter({ endValue, duration, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    let incrementTime = duration / endValue;

    const counter = setInterval(() => {
      setCount((prev) => {
        if (prev < endValue) {
          return prev + 1;
        } else {
          clearInterval(counter);
          return prev;
        }
      });
    }, incrementTime);

    return () => clearInterval(counter);
  }, [endValue, duration]);

  return (
    <div className="overflow-hidden h-[80px]">
      <div
        className="flex flex-col transition-all duration-75 ease-out"
        style={{ transform: `translateY(-${count * 80}px)` }}
      >
        {Array.from({ length: endValue + 1 }, (_, i) => (
          <div
            key={i}
            className="text-5xl font-bold h-[80px] flex items-center justify-center"
          >
            {i}
            {suffix}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="relative bg-[#000000] min-h-screen overflow-hidden">
      {/* Full Background Container including Navbar, images, text */}
      <div
        style={{ backgroundImage: `url(${blobs})` }}
        className="bg-cover bg-center min-h-screen flex flex-col"
      >
        <div className="z-50">
          <Navbar></Navbar>{" "}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col gap-5 md:flex-row min-h-screen items-center justify-center  md:-mt-24 px-8 text-white">
          {/* Left Side - About Text */}
          <div className="md:w-1/2 mb-12 md:mb-0 md:p-12 p-4">
            <h3 className="text-2xl md:text-4xl font-bold mb-4 uppercase text-purple-400">
              Parallel Universe for Gamers
            </h3>
            <p className="text-lg text-gray-300">
              SuperNova Gaming (SNG) is a fully remote gaming organization — not
              just an Esports organization, but a vibrant gaming community
              fueled by passion and dedication. Established in 2019, we have
              been on a mission to elevate the gaming experience, empower
              Esports talents, and foster a sense of togetherness among gaming
              enthusiasts.
            </p>
          </div>

          {/* Right Side - Counters */}
          <div className="md:w-1/2 flex flex-col items-center justify-center p-8 rounded-xl bg-[#a484a918]">
            {/* Titles */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Super Nova Gaming In Numbers
              </h2>
              <p className="text-lg md:text-2xl text-gray-300">
                Our numbers within the past year tells the story
              </p>
            </div>

            {/* Counters */}
            <div className="flex flex-wrap justify-center gap-12 relative">
              {/* 77K+ Players */}
              <div className="flex flex-col items-center">
                <Counter endValue={77} duration={2000} suffix="K+" />
                <p className="text-xl mt-4 text-purple-400 font-semibold">
                  PLAYERS
                </p>
              </div>

              {/* 5M+ Facebook Reach */}
              <div className="flex flex-col items-center">
                <Counter endValue={5} duration={2000} suffix="M+" />
                <p className="text-xl mt-4 text-purple-400 font-semibold text-center">
                  Facebook Reach
                </p>
              </div>

              {/* 11k+ Matches */}
              <div className="flex flex-col items-center">
                <Counter endValue={11} duration={2000} suffix="k+" />
                <p className="text-xl mt-4 text-purple-400 font-semibold">
                  Matches
                </p>
              </div>

              {/* 135+ Tournaments */}
              <div className="flex flex-col items-center">
                <Counter endValue={135} duration={2000} suffix="+" />
                <p className="text-xl mt-4 text-purple-400 font-semibold">
                  Tournaments
                </p>
              </div>


            <div className="w-[120px] absolute left-[-110px] bottom-[-190px] hidden md:block">
              <img className="block" src={logo} alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
