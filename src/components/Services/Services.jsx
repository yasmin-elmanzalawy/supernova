import React from "react";
import servicesbg from "../../assets/servivesbg.png";
import servicesmask from "../../assets/servicesmask.png";
import star from "../../assets/semiministar.png";
import Navbar from "../Navbar/Navbar";
import "./Services.css";
import gcmbg from "../../assets/gcmbg.jpeg";
import gsmbg from "../../assets/gsmbg.jpeg";
import assetcreationbg from "../../assets/assetcreationbg.png";
import managingbg from "../../assets/managingbg.jpeg";
import hostingbg from "../../assets/hostingbg.jpeg";
import blobs from "../../assets/blobs.png";
import union from "../../assets/Union.png";
import Footer from "../Footer/Footer";

export default function Services() {
  // Generate 10 random stars
  const stars = Array.from({ length: 10 }, (_, i) => ({
    top: Math.random() * 700,
    left: Math.random() * window.innerWidth,
    delay: Math.random() * 2.5,
  }));

  const serviceCards = [
    {
      title: "GAMING COMMUNITY MANAGEMENT",
      description:
        "SEAMLESS SETUP, EFFICIENT MANAGEMENT, AND VALUABLE CONSULTATION FOR GAMING COMMUNITIES, AND DISCORD SERVERS",
      bg: gcmbg,
    },
    {
      title: "TOURNAMENT OPERATION/HOSTING",
      description:
        "EXPERT MANAGEMENT AND EXECUTION OF GAMING TOURNAMENTS AND EVENTS WITH 5+ YEARS OF EXPERIENCE",
      bg: gsmbg,
    },
    {
      title: "CONTENT CREATION, VOICE OVER AND SCRIPT WRITING",
      description:
        "HIGH QUALITY CREATION OF GAMING CONTENT INCLUDING ENGAGING VOICE OVERS AND WELL CRAFTED SCRIPTS.",
      bg: assetcreationbg,
    },
    {
      title: "ASSETS CREATION - VIDEO EDITING",
      description: "INNOVATIVE AND CAPTIVATING DESIGN FOR GAMING ASSETS",
      bg: managingbg,
    },
    {
      title: "GAMING SOCIAL MEDIA MANAGEMENT",
      description:
        "SKILLFUL TEAM FOR CLIENT SOCIAL MEDIA PLATFORMS WITH A DEDICATED FOCUS ON GAMING CONTENT",
      bg: hostingbg,
    },
  ];

  return (
    <div >
      {/* Hero Section */}
    <div
        style={{ backgroundImage: `url(${blobs})` }}
        className="bg-cover bg-[#000000]  overflow-hidden bg-center flex flex-col  pt-24 md:pt-36"
      >
        <div className="z-50">
          <Navbar />
        </div>
        <div className="relative">
          <h2 className="text-center text-4xl font-bold mt-5 md:mt-12 text-white py-8">
            Our Services
          </h2>
          <p className="text-center text-white text-2xl p-5">
            Customizable Services that suit your needs
          </p>
          {/* <img
            className="w-[350px] m-auto"
            src={servicesmask}
            alt="masked face"
          /> */}
        </div>
      </div>

      {/* Service Cards Section */}
      <div
        style={{ backgroundImage: `url(${blobs})` }}
        className="bg-[#000000] bg-cover relative py-12 -z-10"
      >
        {/* Bottom purple lines */}
        <div className="absolute bottom-0 left-0 right-0">
          <img className="w-full" src={union} alt="purple background lines" />
        </div>

        {/* Flex container */}
        <div className="flex flex-wrap justify-center items-center gap-10 z-10 relative px-4 max-w-6xl mx-auto">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${card.bg})` }}
              className="relative bg-cover flex justify-center items-center flex-col rounded-xl overflow-hidden shadow-[0_10px_20px_#C084FC] border-b-[#7d009b] border-r-[#7d009b] border-l-[#C084FC] border-b-4 border-l-2 border-r-2
              w-[300px] md:w-[45%] h-[400px] m-3"
            >
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="z-3 relative p-5 text-center">
                <h3 className="py-5 text-2xl font-bold text-[#7d009b]">
                  {card.title}
                </h3>
                <p className="text-white text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
