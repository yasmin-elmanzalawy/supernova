import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ServicesCarousel from "../ServicesCarousel/ServicesCarousel";
import heroBg from "../../assets/herobg.jpg";
import leftArrow from "../../assets/leftarrow.png";
import rightArrow from "../../assets/rightarrow.png";
import homeSec2 from "../../assets/home-sec2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ClientCarousel from "../ClientCarousel/ClientCarousel";
import TeamMembers from "../TeamMembers/TeamMembers";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className=" overflow-hidden">
      <div
        className="relative hero-section h-screen bg-cover bg-[position:30%] md:bg-[position:20%] lg:bg-[position:0%] overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute left-[-5px] right-[-5px] top-0 bottom-[-10px] bg-black opacity-60"></div>
        <div className="z-50 relative ">
          <Navbar />
        </div>
        <div className="relative flex flex-col justify-center items-center text-white h-[100vh] text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold m-5">
            SUPERNOVA GAMING
          </h1>
          <p className="text-3xl md:text-4xl font-light m-5 ">
            Powered by Events, Esports, and Immersive Experiences
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
                hovered ? "md:-translate-x-10 -translate-x-4 -mr-2" : "-mr-10"
              } relative top-10`}
            />

            <div
              className={`h-2  transition-all duration-500 ${
                hovered ? "w-24 sm:w-50 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <Link
                className=" font-russo drop-shadow-[0_0_3px_#7d009b] md:text-4xl text-2xl text-white group-hover:opacity-100"
                to="/about"
              >
                START
              </Link>{" "}
            </div>

            <img
              src={rightArrow}
              alt="Right Arrow"
              className={`w-20 sm:w-20 transition-transform duration-500 ${
                hovered ? "md:translate-x-12 translate-x-4 -ml-2" : "-ml-10"
              } relative top-3`}
            />
          </div>
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_#7D009B,_#000000)] flex flex-col md:flex-row">
        <div className="md:w-[50%] flex flex-col justify-center text-white px-8 py-24 ">
          <h3 className="md:text-5xl text-2xl font-bold pb-12">
            Driven by Discipline. Powered by Innovation. Guided by Purpose.
          </h3>
          <p className="md:text-2xl text-xl pb-8">
            We customize our services to fit each client's needs, helping them
            grow and reach their goals within budget. We focus on fresh ideas,
            teamwork, quality, and honesty—delivering top-notch solutions that
            enhance the gaming experience
          </p>
          <Link to="/about">
            <button className="self-start md:text-xl bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_100%)] text-white px-6 py-3 rounded-[10px] hover:shadow-[0_0_5px_3px_white] transition-all border shadow-[0_0_5px_2px_rgba(255,255,255,0.5)] ">
              About us
            </button>
          </Link>
        </div>
        <div className="md:w-[50%]">
          <img className="block w-[100%]" src={homeSec2} alt="Gaming Arena" />
        </div>
      </div>
      {/* our services section */}
      <div className="bg-black p-5">
        <h3 className="md:text-5xl text-3xl pt-5 font-bold text-white text-center">
          Our services
        </h3>
        <ServicesCarousel />
      </div>
      {/* our clients section */}
      <div className="bg-[#101010] p-5">
        <h3 className="md:text-5xl text-3xl py-12 font-bold text-white text-center">
          Our Clients
        </h3>
        <ClientCarousel></ClientCarousel>
      </div>
      {/* our teams section */}
      <div className="bg-[linear-gradient(to_bottom,_#101010_0%,_#101010_70%,_#7D009B)]  pt-32">
        <h3 className="md:text-5xl text-3xl font-bold text-white text-center ">
          Ceo Message
        </h3>
        <TeamMembers></TeamMembers>
      </div>
      <Footer></Footer>
    </div>
  );
}
