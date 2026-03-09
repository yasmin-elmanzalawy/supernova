import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import whitelogo from "../../assets/white-logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // You can change 50 to any offset
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="z-[99999999999999999]">
      <nav
        className={`fixed top-0 left-0 right-0  w-full transition-all duration-300  ${
          isScrolled ? "h-16  bg-black/50 shadow-lg backdrop-blur-sm" : "h-24"
        }`}
      >
        {/* Larger screen navbar */}
        <div>
          <ul className="hidden md:flex justify-around items-center p-3 text-2xl text-white font-bold">
            <li
              className={` transition-all duration-300 ${
                isScrolled ? "text-lg mt-[-15px]" : "text-2xl mt-0"
              }`}
            >
              <Link className="hover:text-purple-900 duration-300" to="/">
                Home
              </Link>
            </li>
            <li
              className={` transition-all duration-300 ${
                isScrolled ? "text-lg mt-[-15px]" : "text-2xl mt-0"
              }`}
            >
              <Link className="hover:text-purple-900 duration-300" to="/about">
                About us
              </Link>
            </li>
            <li
              className={` transition-all duration-300 ${
                isScrolled ? "text-lg mt-[-15px]" : "text-2xl mt-0"
              }`}
            >
              <Link
                className="hover:text-purple-900 duration-300"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li
              className={` transition-all duration-300 ${
                isScrolled ? "w-[50px]" : "w-[70px]"
              }`}
            >
              <Link className="glow-wrapper" to="/">
                <div className="glow-circle"></div>
                <img
                  src={whitelogo}
                  className="logo transform-transition hover:scale-110 duration-300 ease-in"
                  alt=""
                />
              </Link>
            </li>
            <li
              className={` transition-all duration-300 ${
                isScrolled ? "text-lg mt-[-15px]" : "text-2xl mt-0"
              }`}
            >
              <Link
                className="hover:text-purple-900 duration-300"
                to="/clients"
              >
                Clients
              </Link>
            </li>
            <li
              className={` transition-all duration-300 ${
                isScrolled ? "text-lg mt-[-15px]" : "text-2xl mt-0"
              }`}
            >
              <Link
                className="hover:text-purple-900 duration-300"
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li
              className={` transition-all duration-300 ${
                isScrolled ? "text-lg mt-[-15px]" : "text-2xl mt-0"
              }`}
            >
              <Link
                className="hover:text-purple-900 duration-300"
                to="/contact"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Toggle icon */}
        <div>
          <div
  className={`md:hidden flex items-center justify-between transition-all duration-300 w-full px-5 ${
    isScrolled ? "py-2" : "py-5"
  }`}
>
            <button
              onClick={toggleMenu}
              className="text-white duration-300 transition-transform"
            >
              {/* First Bar */}
               <div
      className={`w-8 h-0.5 bg-white my-1 transition-all duration-300 ${
        isOpen ? "rotate-45 translate-y-2" : ""
      }`}
    ></div>

              {/* Second Bar */}
              <div
                className={`w-8 h-0.5 bg-white my-1 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>

              {/* Third Bar */}
              <div
                className={`w-8 h-0.5 bg-white my-1 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </button>

            {/* Changed <li> to <div> here to fix the white dot */}
            <div
    className={`transition-all duration-300 ${
      isScrolled ? "w-[70px] mt-[-10px]" : "w-[90px]"
    }`}
  >
              <Link className="glow-wrapper" to="/">
                <div className="glow-circle-md"></div>
                <img
                  src={whitelogo}
                  className="logo w-[90px] transform-transition hover:scale-95 duration-300 ease-in p-5"
                  alt=""
                />
              </Link>
            </div>
          </div>

          {/* Smaller screen navbar */}
          <div
            className={`md:hidden menu ${
              isOpen ? "open" : ""
            } rounded-lg flex items-center justify-center h-[80vh] text-white m-10 bg-opacity-95 absolute top-20 left-0 right-0 z-[111111111]`}
          >
            <ul className="flex flex-col justify-between items-center text-3xl">
              <li>
                <Link
                  className=" duration-300 text-[1.5rem]  hover:text-[2.2rem]"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className=" duration-300 text-[1.5rem]  hover:text-[2.2rem]"
                  to="/about"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className=" duration-300 text-[1.5rem]  hover:text-[2.2rem]"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className=" duration-300 text-[1.5rem]  hover:text-[2.2rem]"
                  to="/clients"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  className=" duration-300 text-[1.5rem]  hover:text-[2.2rem]"
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className=" duration-300 text-[1.5rem]  hover:text-[2.2rem]"
                  to="/contact"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
