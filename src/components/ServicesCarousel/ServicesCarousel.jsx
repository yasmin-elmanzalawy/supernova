import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "VIDEO EDITING",
    description: "STUNNING DESIGN FOR GAMING CONTENT",
    image: "/bg-1.jpg",
  },
  {
    id: 2,
    title: "GAMING SOCIAL MEDIA MANAGEMENT",
    description:
      "SKILLFUL TEAM FOR CLIENT SOCIAL MEDIA PLATFORMS WITH A DEDICATED FOCUS ON GAMING CONTENT",
    image: "/bg-2.jpg",
  },
  {
    id: 3,
    title: "TOURNAMENT MANAGEMENT",
    description:
      "EXPERT MANAGEMENT OF GAMING TOURNAMENTS WITH 5+ YEARS OF EXPERIENCE",
    image: "/bg-3.jpg",
  },
  {
    id: 4,
    title: "GAMING WEBSITE DESIGN",
    description: "CREATIVE AND ENGAGING WEBSITES FOR GAMING COMMUNITIES",
    image: "/bg-4.jpg",
  },
  {
    id: 5,
    title: "GAME STREAMING SERVICES",
    description: "PROFESSIONAL STREAMING SETUP FOR GAME CONTENT CREATORS",
    image: "/bg-5.jpg",
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
          className="absolute left-4 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full"
          onClick={() => paginate(-1)}
        >
          {/* Left Arrow Icon */}
        </button>

        <button
          className="absolute right-4 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full"
          onClick={() => paginate(1)}
        >
          {/* Right Arrow Icon */}
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
                    ? `calc(-20% - ${
                        window.innerWidth >= 768 ? "0px" : "0px"
                      })`
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
