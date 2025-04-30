import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";  // Importing the swipeable hook
import blobs from "../../assets/blobs.png";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/aboutlogo.png";
import swap1 from "../../assets/swap1.png";
import swap2 from "../../assets/swap2.png";
import swap3 from "../../assets/swap3.png";
import union from "../../assets/Union.png";
import "./About.css";
import Moon from "../Moon/Moon";

// Counter logic
function Counter({ endValue, duration, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
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

// Diagonal swiper with swipeable support
function DiagonalSwiper() {
  const images = [swap1, swap2, swap3];
  const [centerIndex, setCenterIndex] = useState(0);

  const getPosition = (index) => {
    const relativeIndex = (index - centerIndex + images.length) % images.length;
    if (relativeIndex === 0) return "center";
    if (relativeIndex === 1) return "bottom-right";
    return "top-left";
  };

  const variants = {
    "top-left": {
      x: -120,
      y: -120,
      zIndex: 10,
      scale: 0.7,
      opacity: 0.6,
    },
    center: {
      x: 0,
      y: 0,
      zIndex: 30,
      scale: 1.2,
      opacity: 1,
    },
    "bottom-right": {
      x: 120,
      y: 120,
      zIndex: 20,
      scale: 0.7,
      opacity: 0.6,
    },
  };

  const handleClick = (index) => {
    if (index === centerIndex) return;
    setCenterIndex(index);
  };

  // Swipeable handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCenterIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setCenterIndex((prev) => (prev - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...swipeHandlers}
      className="relative w-[250px] h-[250px] md:w-[500px] md:h-[500px] mx-auto"
    >
      {images.map((img, i) => {
        const position = getPosition(i);
        return (
          <motion.img
            key={i}
            src={img}
            alt=""
            initial={false}
            animate={variants[position]}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute rounded-xl shadow-lg cursor-pointer"
            style={{
              width: "60%",
              height: "60%",
              objectFit: "cover",
            }}
            onClick={() => handleClick(i)}
          />
        );
      })}
    </div>
  );
}

export default function About() {
  return (
    <div className="relative bg-[#000000] min-h-screen overflow-hidden">
      <div
        style={{ backgroundImage: `url(${blobs})` }}
        className="bg-cover bg-center min-h-screen flex flex-col"
      >
        <div className="z-50">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col gap-5 md:flex-row min-h-screen items-center justify-center md:-mt-24 px-8 text-white">
          {/* Left */}
          <div className="md:w-1/2 mb-12 md:mb-0 md:p-12 p-4">
            <h3 className="text-2xl md:text-4xl font-bold mb-4 uppercase text-purple-400">
             <span className="text-white">Parallel</span> Universe <span className="text-white">for</span> Gamers
            </h3>
            <p className="text-xl md:text-3xl text-gray-300">
            
            SuperNova Gaming (SNG) is a fully remote gaming organization—not just an Esports  organization, but a vibrant gaming community fueled by passion and dedication.  Established
in 2019, we have been on a mission to elevate 
the gaming experience,  empower Esports talents, and foster a sense of togetherness among gaming  enthusiasts.
            </p>
          </div>

          {/* Right - Counters */}
          <div className="md:w-1/2 flex flex-col items-center justify-center p-8 rounded-xl bg-[#a484a918]">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Super Nova Gaming In Numbers
              </h2>
              <p className="text-lg md:text-2xl text-gray-300">
                Our numbers within the past year tell the story
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-12 relative">
              <div className="flex flex-col items-center">
                <Counter endValue={77} duration={2000} suffix="K+" />
                <p className="text-xl mt-4 text-purple-400 font-semibold">
                  PLAYERS
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Counter endValue={5} duration={2000} suffix="M+" />
                <p className="text-xl mt-4 text-purple-400 font-semibold text-center">
                  Facebook Reach
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Counter endValue={11} duration={2000} suffix="k+" />
                <p className="text-xl mt-4 text-purple-400 font-semibold">
                  Matches
                </p>
              </div>

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

        {/* Second Section */}
        <div className="text-white relative z-10 flex flex-col gap-5 md:flex-row min-h-screen items-center justify-center md:-my-24 my-24 px-8">
          <div className="md:w-1/2">
            <div className="mb-8 ">
              <h3 className="text-3xl md:text-5xl py-4">Our Mission</h3>
              <p className="text-xl md:text-3xl font-light">
              To revolutionize gaming experiences globally By providing high-quality, innovative solutions  that cater to the unique needs of our clients. From tournament management to content  creation and beyond.
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl py-4">Our Vision</h3>
              <p className="text-xl md:text-3xl font-light">
              To support organizations in enhancing tournament management, simplifying workflows, and  boosting media and content creation. We believe in collaboration to elevate and advance the  gaming community.
              </p>
            </div>
          </div>

          {/* Swiper */}
          <div className="flex justify-center items-center my-5 py-5 md:w-1/2 relative   ">
           
           <div className="translate-x-[20%] translate-y-[35%] relative "><DiagonalSwiper /></div> 
          </div>
           <img src={union} className="absolute bottom-0 left-0 right-0 -z-40" alt="union" />
        </div>
      </div>
     <div className="py-24">
      <Moon></Moon>
     </div>
     
    </div>
  );
}
