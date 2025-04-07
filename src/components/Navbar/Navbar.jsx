import React, { useState } from "react";
import { Link } from "react-router-dom";
import whitelogo from "../../assets/white-logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav>
        {/* Larger screen navbar */}
        <div>
          <ul className="hidden md:flex justify-around items-center p-3 text-2xl text-white font-bold">
            <li>
              <Link className="hover:text-purple-900 duration-300" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-900 duration-300" to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-900 duration-300" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="glow-wrapper" to="/">
                <div className="glow-circle"></div>
                <img
                  src={whitelogo}
                  className="logo transform-transition hover:scale-110 duration-300 ease-in"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-900 duration-300" to="/clients">
                Clients
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-900 duration-300" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-900 duration-300" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Toggle icon */}
        <div className="md:hidden flex items-center justify-between p-5">
          <button
            onClick={toggleMenu}
            className="text-white duration-300 transition-transform"
          >
            {/* First Bar */}
            <div
              className={`w-8 h-0.5 bg-white my-1 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></div>

            {/* Second Bar */}
            <div
              className={`w-8 h-0.5 bg-white my-1 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            ></div>

            {/* Third Bar */}
            <div
              className={`w-8 h-0.5 bg-white my-1 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></div>
          </button>

          <li>
            <Link className="glow-wrapper" to="/">
              <div className="glow-circle-md"></div>
              <img
                src={whitelogo}
                className="logo w-[90px] transform-transition hover:scale-95 duration-300 ease-in p-5"
                alt=""
              />
            </Link>
          </li>
        </div>

        {/* Smaller screen navbar */}
        <div
          className={`md:hidden menu ${isOpen ? "open" : ""} rounded-lg flex items-center justify-center h-[80vh] text-white m-10 bg-opacity-95 absolute top-20 left-0 right-0 z-50`}
        >
          <ul className="flex flex-col justify-between items-center text-3xl">
            <li>
              <Link className=" duration-300 text-[1.5rem]  hover:text-[2.2rem]" to="/">Home</Link>
            </li>
            <li>
              <Link className=" duration-300 text-[1.5rem]  hover:text-[2.2rem]" to="/about">About us</Link>
            </li>
            <li>
              <Link className=" duration-300 text-[1.5rem]  hover:text-[2.2rem]" to="/services">Services</Link>
            </li>
            <li>
              <Link className=" duration-300 text-[1.5rem]  hover:text-[2.2rem]" to="/clients">Clients</Link>
            </li>
            <li>
              <Link className=" duration-300 text-[1.5rem]  hover:text-[2.2rem]" to="/projects">Projects</Link>
            </li>
            <li>
              <Link className=" duration-300 text-[1.5rem]  hover:text-[2.2rem]" to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
