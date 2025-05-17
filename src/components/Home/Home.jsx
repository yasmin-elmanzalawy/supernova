import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ServicesCarousel from "../ServicesCarousel/ServicesCarousel";
import heroBg from "../../assets/herobg.jpg";
import leftArrow from "../../assets/leftarrow.png";
import rightArrow from "../../assets/rightarrow.png";
import gem from "../../assets/gem.png";
import homeSec2 from "../../assets/home-sec2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ClientCarousel from "../ClientCarousel/ClientCarousel";
import TeamMembers from "../TeamMembers/TeamMembers";
import "./Home.css"

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <div
        className="relative hero-section h-screen bg-cover bg-[position:30%] md:bg-[position:20%] lg:bg-[position:0%]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black opacity-60"></div>
        <div className="z-3 relative">
          <Navbar />
          <div className="flex flex-col justify-center items-center text-white h-[70vh] text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold m-5">
              SUPERNOVA GAMING
            </h1>
            <p className="text-3xl md:text-6xl font-light m-5 ">
              PARALLEL UNIVERSE FOR GAMERS
            </p>

            <div
              className="relative flex items-center justify-center w-full max-w-2xl mt-12"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <img
                src={leftArrow}
                alt="Left Arrow"
                className={`w-20 sm:w-20 transition-transform duration-500 ${
                  hovered ? "md:-translate-x-24 -translate-x-12 -mr-2" : "-mr-10"
                } relative top-10`}
              />

              <div
                className={`h-2  transition-all duration-500 ${
                  hovered ? "w-24 sm:w-50 opacity-100" : "w-0 opacity-0"
                }`}
              ><Link className="drop-shadow-[0_0_3px_#A855F7] text-2xl text-white group-hover:opacity-100" to='/about'>Start Your Journey</Link> </div>

              <img
                src={rightArrow}
                alt="Right Arrow"
                className={`w-20 sm:w-20 transition-transform duration-500 ${
                  hovered ? "md:translate-x-24 translate-x-12 -ml-2" : "-ml-10"
                } relative top-3`}
              />
            </div>
          </div>
        </div>
      </div>
      <div  className="bg-[#101010] flex flex-col md:flex-row py-5" >
        <div className="md:w-[50%] flex flex-col justify-center text-white p-8 ">
          <h3 className="text-5xl font-bold pb-12 text-center">
            Discipline. Innovation. Altruism.
          </h3>
          <p className="text-2xl pb-8 text-center">
            We tailor our services to meet each client's needs, helping them
            grow and achieve their goals within their budget. We prioritize
            innovation, collaboration, quality, expertise and integrity,
            ensuring top-quality solutions that elevate the gaming experience
          </p>
          <Link to="/about">
            <button className="self-start text-xl bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_100%)] text-white px-6 py-3 rounded-[10px] hover:shadow-[0_0_5px_3px_white] transition-all border shadow-[0_0_5px_2px_rgba(255,255,255,0.5)] m-auto block">
              About us
            </button>
          </Link>
        </div>
        <div className="md:w-[50%] md:h-[100vh] flex items-center justify-center">
  <div className="md:w-[50%] md:h-[100vh] flex items-center justify-center">
  <img
    className="block md:w-[80%] w-[50%] m-auto float-scale-animation"
    src={gem}
    alt="Gaming Arena"
  />
</div>

</div>

      </div>
      {/* our services section */}
      <div className="bg-[radial-gradient(ellipse_at_center,_#7D009B,_#000000)] p-5">
        <h3 className="md:text-5xl text-4xl pt-5 font-bold text-white text-center">
          Our services
        </h3>
        <ServicesCarousel />
      </div>
      {/* our clients section */}
      <div className="bg-[#101010] p-5">
        <h3 className="md:text-5xl text-4xl py-12 font-bold text-white text-center">
          Our Clients
        </h3>
        <ClientCarousel></ClientCarousel>
      </div>
      {/* our teams section */}
      <div className="bg-[linear-gradient(to_bottom,_#101010_0%,_#101010_70%,_#7D009B)]  py-14">
        <h3 className="md:text-5xl text-4xl py-4 font-bold text-white text-center ">
          Our Team
        </h3>
        <TeamMembers></TeamMembers>
        <Link to="/teams">
          {" "}
          <div className="flex justify-center my-14">
            <button className="inline-block text-xl bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_100%)] text-white px-6 py-3 rounded-[10px] hover:shadow-[0_0_5px_3px_white] transition-all border shadow-[0_0_5px_2px_rgba(255,255,255,0.5)] ">
              Know More
            </button>
          </div>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
}
