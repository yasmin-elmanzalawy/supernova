import React from "react";
import blobs from "../../assets/blobs.png";
import bgsec from "../../assets/projectsec.png";
import jinx from "../../assets/jinx.png";
import powder from "../../assets/powder.png";
import eclipse from "../../assets/eclipse.gif";
import rings from "../../assets/rings.png";
import arena from "../../assets/arena.png";
import games from "../../assets/games.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="relative bg-[#000000]  overflow-hidden">
      <div
        style={{ backgroundImage: `url(${blobs})` }}
        className="bg-cover bg-center flex flex-col  pt-24 md:pt-36"
      >
        <div className="z-50">
          <Navbar />
        </div>

        <div className=" ">
          {/* <img
            src={powder}
            alt="Powder"
            className="h-[50vh] md:h-[100vh] object-contain md:absolute md:left-10 md:top-1/2 md:translate-y-[-60%] top-20 left-5"
          /> */}

          <div className="text-center z-10 px-4 my-24 md:mt-0">
            {/* flex-1 flex flex-col md:flex-row items-center justify-center relative */}
            <h3
              className="text-center text-4xl font-bold mt-5 md:mt-12 text-white py-8"
            >
              Our Past Projects
            </h3>

            <p
              className="text-center text-white text-2xl p-5 "
             
            >
              Elevating Gaming Through Content & Esports
            </p>
          </div>

          {/* <img
            src={jinx}
            alt="Jinx"
            className="h-[50vh] md:h-[100vh]  md:d-block object-contain md:absolute md:right-10 md:bottom-1/2 md:translate-y-[40%] bottom-0 right-5"
          /> */}
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-5 justify-around">
          <div className="group relative rounded-lg border-4 m-7 border-[#7c009b59] text-white text-center w-[90vw] md:w-[40vw] h-[50vh] md:h-[60vh] overflow-hidden">
            <div className="absolute bottom-24 flex flex-col items-center ">
              <h3 className="text-xl md:text-3xl border-0 relative font-bold">356Games.net</h3>
              <p className=" md:text-2xl p-5">
                365Games – Bringing Gaming to Life Through Engaging Content
              </p>
            </div>

            <div className="md:w-[300px] w-[200px] mt-12 m-auto relative ">
              <img
                src={games}
                alt="Gaming Visual"
                className="w-[full] h-full  bottom-0 object-cover"
              />
            </div>
            <Link to="/356games">
              <div>
                <button className=" absolute bottom-0 self-start text-xl bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_100%)] text-white md:px-6 px-2 py-3 rounded-[10px] hover:shadow-[0_0_5px_3px_white] transition-all translate-x-[-50%] mb-5 border shadow-[0_0_5px_2px_rgba(255,255,255,0.5)] ">
                  Read More
                </button>
              </div>
            </Link>
          </div>
          <div className="group relative rounded-lg border-4 m-7 border-[#7c009b59] text-white text-center w-[90vw] md:w-[40vw] h-[50vh] md:h-[60vh] overflow-hidden">
           <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center text-white ">
  <h3 className="text-xl md:text-3xl font-bold">Arena PUBG Cup</h3>
  <p className="   md:text-2xl mt-2">Bringing the Community Together</p>
</div>


            <div className="md:w-[300px] w-[200px] mt-0 m-auto relative ">
              <img
                src={arena}
                alt="Gaming Visual"
                className="w-[full] h-full  bottom-0 object-cover"
              />
            </div>
            <Link to="/arena">
              <div>
                <button className=" absolute bottom-0 self-start text-xl bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_100%)] text-white md:px-6 px-2 py-3 rounded-[10px] hover:shadow-[0_0_5px_3px_white] transition-all translate-x-[-50%] mb-5 border shadow-[0_0_5px_2px_rgba(255,255,255,0.5)] ">
                  Read More
                </button>
              </div>
            </Link>
          </div>
          {/* <div className="group relative rounded-lg border-4 m-7 border-[#7c009b59] text-white text-center w-[90vw] md:w-[40vw] h-[60vh] overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out group-hover:opacity-0">
              <h3 className="text-2xl md:text-4xl pb-5">Arena PUBG Cup</h3>
              <p className=" md:text-2xl p-5">
                Bringing the Community Together
              </p>
            </div>

            <div className="w-[300px] m-auto md:mt-12 mt-12 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
              <img
                src={arena}
                alt="Gaming Visual"
                className="w-[full] h-full object-cover"
              />
            </div>
            <Link to="/arena">
              <div>
                <button className=" absolute bottom-0 self-start text-xl bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_100%)] text-white px-6 py-3 rounded-[10px] hover:shadow-[0_0_5px_3px_white] transition-all translate-x-[-50%] mb-5 border shadow-[0_0_5px_2px_rgba(255,255,255,0.5)] ">
                  Read More
                </button>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
      <div className=" bg-[#000000]  ">
        <div
          style={{ backgroundImage: `url(${bgsec})` }}
          className="bg-cover bg-center relative "
        >
          <p
            className="text-center md:px-64 px-12 py-32 text-2xl md:text-4xl font-normal  relative text-white mb-4"
            
          >
            Empowering Gaming Brands with Creative Content, Engaging
            Experiences, and Unforgettable Esports Events.
          </p>
        </div>
      </div>
      <div className="relative flex justify-center m-auto -mt-24 md:mb-12 mb-8  md:w-[350px] w-[250px]">
        <div className=" overflow-hidden">
          <img
            src={eclipse}
            alt="eclipse"
            className="block z-40 scale-125"
            style={{ clipPath: "inset(1px)" }}
          />
        </div>
        <div className=" absolute ">
          <img className="block " src={rings} alt="eclipse" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
