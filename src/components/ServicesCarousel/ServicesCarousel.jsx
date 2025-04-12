import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import lefttop from "../../assets/lefttop.png";
import leftbtm from "../../assets/leftbtm.png";
import righttop from "../../assets/righttop.png";
import rightbtm from "../../assets/rightbtm.png";
import gcmbg from "../../assets/gcmbg.jpeg";
import gsmbg from "../../assets/gsmbg.jpeg";
import assetcreationbg from "../../assets/assetcreationbg.png";
import managingbg from "../../assets/managingbg.jpeg";
import hostingbg from "../../assets/hostingbg.jpeg";

const services = [
  {
    id: 1,
    title: "GAMING COMMUNITY MANAGEMENT",
    description: "SEAMLESS SETUP, EFFICIENT MANAGEMENT, AND VALUABLE CONSULTATION FOR GAMING COMMUNITIES, AND DISCORD SERVERS",
    image: gcmbg ,
  },
  {
    id: 2,
    title: "ASSETS CREATION - VIDEO EDITING",
    description:
      "INNOVATIVE AND CAPTIVATING DESIGN FOR GAMING ASSETS",
    image: gsmbg,
  },
  {
    id: 3,
    title: "GAMING SOCIAL MEDIA MANAGEMENT",
    description:
      "SKILLFUL TEAM FOR CLIENT SOCIAL MEDIA PLATFORMS WITH A DEDICATED FOCUS ON GAMING CONTENT",
    image: managingbg,
  },
  {
    id: 4,
    title: "TOURNAMENT OPERATION/HOSTING",
    description: "EXPERT MANAGEMENT AND EXECUTION OF GAMING TOURNAMENTS AND EVENTS WITH 5+ YEARS OF EXPERIENCE",
    image: hostingbg,
  },
  {
    id: 5,
    title: "CONTENT CREATION, VOICE OVER AND SCRIPT WRITING",
    description: "HIGH QUALITY CREATION OF GAMING CONTENT, INCLUDING ENGAGING VOICE OVERS AND WELL CRAFTED SCRIPTS.",
    image: assetcreationbg,
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 10,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function StyledCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir) => {
    let newIndex = (index + dir + services.length) % services.length;
    setIndex([newIndex, dir]);
  };

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      paginate(1); // Scroll down, go to the next slide
    } else {
      paginate(-1); // Scroll up, go to the previous slide
    }
  };

  return (
    <div
      className="relative w-full max-w-8xl mx-auto py-12 text-white overflow-hidden"
      onWheel={handleWheel}
    >
      <div className="relative flex justify-center items-center">
        {/* Arrows */}

        <button
          className="arrow-button left absolute left-[-10px] md:left-[50px] z-20 p-3 rounded-full overflow-hidden group"
          onClick={() => paginate(-1)}
        >
          <div className="relative flex flex-col items-center justify-center w-[50px] md:w-[110px] h-24">
            <img
              src={lefttop}
              alt="left top"
              className="transition-transform duration-300 md:group-hover:-translate-y-3 group-hover:-translate-y-5 "
            />
            <span className="absolute opacity-0 transition-opacity duration-300 text-[14px] md:text-xl drop-shadow-[0_0_3px_#A855F7]  text-white group-hover:opacity-100">
              Swipe Left
            </span>
            <img
              src={leftbtm}
              alt="left bottom"
              className="transition-transform duration-300 md:group-hover:translate-y-3 group-hover:translate-y-5"
            />
          </div>
        </button>

        <button
          className="arrow-button right absolute right-[-10px] md:right-[50px] z-20 p-3 rounded-full overflow-hidden group"
          onClick={() => paginate(1)}
        >
          <div className="relative flex flex-col items-center justify-center w-[50px] md:w-[110px] h-24">
            <img
              src={righttop}
              alt="right top"
              className="transition-transform duration-300 group-hover:-translate-y-5 md:group-hover:-translate-y-3"
            />
            <span className="absolute opacity-0 transition-opacity duration-300 md:text-xl drop-shadow-[0_0_3px_#A855F7] text-[14px] text-white group-hover:opacity-100">
              Swipe Right
            </span>
            <img
              src={rightbtm}
              alt="right bottom"
              className="transition-transform duration-300 group-hover:translate-y-5 md:group-hover:translate-y-3"
            />
          </div>
        </button>

        {/* Cards */}
        <div className="relative w-[100%] h-[450px] flex items-center justify-center">
          {services.map((service, i) => {
            const isActive = i === index;
            const isLeft =
              i === (index - 1 + services.length) % services.length;
            const isRight = i === (index + 1) % services.length;

            return (
              <motion.div
                key={service.id}
                className={`absolute w-[300px] md:w-[600px]  h-full rounded-2xl transition-all duration-300 bg-cover bg-center overflow-hidden ${
                  isActive
                    ? "scale-100 border-[4px] border-purple-500 z-10"
                    : "scale-90 opacity-30 z-0"
                }`}
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${service.image})`,
                  left: isActive
                    ? `calc(50% - ${
                        window.innerWidth >= 768 ? "300px" : "150px"
                      })`
                    : isLeft
                    ? `calc(-20% - ${window.innerWidth >= 768 ? "0px" : "0px"})`
                    : isRight
                    ? `calc(80% - 0px)`
                    : "100%",
                  transition: "left 0.3s ease-in-out",
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(e, info) => {
                  if (info.offset.x > 100) {
                    paginate(-1); // Swipe left to go to previous
                  } else if (info.offset.x < -100) {
                    paginate(1); // Swipe right to go to next
                  }
                }}
              >
                <div className="p-6 h-full flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-purple-400">
                    {service.title}
                  </h3>
                  <p className="text-white font-medium text-sm mt-2">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
