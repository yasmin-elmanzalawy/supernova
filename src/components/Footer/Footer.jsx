import React from "react";
import footerbg from "../../assets/footer.png";
import logo from "../../assets/white-logo.png";
import tiktok from "../../assets/tiktoppng.png";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import yt from "../../assets/yt.png";
import discord from "../../assets/discord.png";
import linkedin from "../../assets/linkden.png";
import star from "../../assets/semiministar.png";

export default function Footer() {
  const stars = Array.from({ length: 10 }, (_, i) => ({
    top: Math.random() * 700,
    left: Math.random() * window.innerWidth,
    delay: Math.random() * 2.5,
  }));

  return (
    <div className="relative bg-black pt-24 overflow-hidden bg-[linear-gradient(to_bottom,_#000000_0%,_#000000_60%,_#7D009B)] ">
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
      <div className="relative z-50 text-white p-4 flex-wrap md:flex-nowrap flex justify-center">
        <div className=" md:w-[30%] text-center my-12">
          <h3 className="text-3xl font-extrabold">Supernova</h3>
          <p className="py-12 text-xl">PARLLEL UNIVARESE FOR GAMERS</p>
          <img className="m-auto" src={logo} alt="white logo" />
        </div>
        <div className=" md:w-[30%] text-center my-12">
          <h3 className="text-3xl font-extrabold ">Contact Information</h3>
          <p className="py-12 text-xl "> info@supernova-gaming.com</p>
          <p className="text-xl">+20 15 0393 3933 </p>
        </div>
        <div className="md:w-[20%] text-center my-12">
          <h3 className="text-3xl font-extrabold ">Follow Us</h3>
          <div className="flex justify-center ">
            <div className="m-2">
             <a href="https://www.facebook.com/TheSuperNovaGamingg"> <img className="w-full block" src={fb} alt="facebook icon" /></a>
            </div>
            <div className="m-2">
              <a href="https://www.instagram.com/thesupernovagaming/"><img className="w-full block" src={ig} alt="instagram icon" /></a>
            </div>
            <div className="m-2">
             <a href="https://www.tiktok.com/@thesngshorts"><img className="w-full block" src={tiktok} alt="tiktok icon" /></a> 
            </div>
          </div>
          <div className="flex justify-center mt-[-10px]">
            <div className="m-2">
              <a href="https://www.linkedin.com/company/supernovagaming"><img
                className="w-full block"
                src={linkedin}
                alt="linkedin icon"
              /></a>
            </div>
            <div className="m-2">
             <a href="https://www.youtube.com/@thesupernovagamingg"> <img className="w-full block" src={yt} alt="youtibe icon" /></a>
            </div>
            <div className="m-2">
             <a href="https://discord.com/invite/nbExCgThAv"> <img className="w-full block " src={discord} alt="discord icon" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[-600px] md:top-0 bottom-0 left-0 right-0 z-10">
        {/* <img
          src={footerbg}
          alt="Color vector"
          className="w-full h-[100%] object-cover"
        /> */}
      </div>
    </div>
  );
}
