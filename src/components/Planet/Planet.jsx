import React from "react";
import planet from "../../assets/planet.png";
import "./Planet.css";
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
        <div className="orbit orbit-2">
          <img className="md:mt-[-40px] mt-[-10px]" src={planet} />
        </div>
        <div className="orbit orbit-3"></div>
        <div className="orbit orbit-4"></div>
        <div className="planet"></div>
        <div className=" bg-[rgba(0,0,0,0.5)] border-4 border-[#7c009b59] rounded-xl mx-8 md:mx-0 relative z-50 mt-24 md:mt-0">
          <div className="p-12">
            <div className="flex gap-5 flex-wrap md:flex-nowrap">
            <div className="m-5">
              <label for="firstName" className="text-[#5b3392c9] px-2 ">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="bg-[rgba(225,225,225,0.2)] border-[#5b3392c9] border rounded p-2 w-full my-2"
                placeholder="First Name"
              />
            </div>
            <div className="m-5">
              <label for="lastName" className="text-[#5b3392c9] px-2 ">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="bg-[rgba(225,225,225,0.2)] border-[#5b3392c9] border rounded p-2 w-full my-2"
                placeholder="Last Name"
              />
            </div>
            </div>
            <div className="m-5">
              <label for="email" className="text-[#5b3392c9] px-2 ">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="bg-[rgba(225,225,225,0.2)] border-[#5b3392c9] border rounded p-2 w-full my-2"
                placeholder="Your Email"
              />
            </div>
            <div className="m-5">
              <label for="message" className="text-[#5b3392c9] px-2 ">
                Message
              </label>
              <input
                type="textfield"
                id="message"
                name="message"
                className="bg-[rgba(225,225,225,0.2)] border-[#5b3392c9] border rounded p-2 w-full my-2"
              />
            </div>
            <div>
              <button className=" self-start text-xl bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_100%)] text-white px-6 py-3 rounded-[10px] hover:shadow-[0_0_5px_3px_white] transition-all border shadow-[0_0_5px_2px_rgba(255,255,255,0.5)] m-auto block">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
