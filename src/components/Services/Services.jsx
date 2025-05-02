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
      title: "GAMING SERVER MANAGEMENT",
      description:
        "FULL CONFIGURATION, MONITORING, AND MAINTENANCE OF PRIVATE AND PUBLIC GAME SERVERS",
      bg: gsmbg,
    },
    {
      title: "ASSET CREATION",
      description:
        "CUSTOM LOGOS, BANNERS, EMOTES, AND GRAPHIC DESIGN TAILORED FOR YOUR COMMUNITY",
      bg: assetcreationbg,
    },
    {
      title: "COMMUNITY MANAGEMENT",
      description:
        "MEMBER SUPPORT, EVENT COORDINATION, AND MODERATION TO MAINTAIN HEALTHY SPACES",
      bg: managingbg,
    },
    {
      title: "EVENT HOSTING",
      description:
        "ORGANIZE AND HOST FUN, COMPETITIVE, OR THEMED EVENTS FOR YOUR GAMING COMMUNITY",
      bg: hostingbg,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover overflow-hidden z-50 h-[100vh]"
        style={{ backgroundImage: `url(${servicesbg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Shooting stars */}
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

        <div className="z-50 relative">
          <Navbar />
          <h2 className="text-center text-4xl font-bold mt-24 md:mt-12 text-white py-8">
            Our services
          </h2>
          <p className="text-center text-white text-2xl px-5">
            Customizable Services that suit your needs
          </p>
          <img
            className="w-[350px] m-auto"
            src={servicesmask}
            alt="masked face"
          />
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
              className="relative bg-cover flex justify-center items-center flex-col rounded-xl overflow-hidden shadow-[0_10px_20px_#C084FC] border-b-[#C084FC] border-r-[#C084FC] border-l-[#C084FC] border-b-4 border-l-2 border-r-2
              w-[300px] md:w-[45%] h-[400px] m-3"
            >
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="z-3 relative p-5 text-center">
                <h3 className="py-5 text-2xl font-bold text-[#C084FC]">
                  {card.title}
                </h3>
                <p className="text-white text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
