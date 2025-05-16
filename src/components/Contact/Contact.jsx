import React from "react";
import blobs from "../../assets/blobs.png";
import ClientCarousel from "../ClientCarousel/ClientCarousel";
import Navbar from "../Navbar/Navbar";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
import Footer from "../Footer/Footer";

export default function Client() {
  return (
    <div>
      <div className="bg-[#000000] overflow-hidden text-white">
        <div
          style={{ backgroundImage: `url(${blobs})` }}
          className="bg-cover flex flex-col "
        >
          <div className="z-50">
            <Navbar />
          </div>
          <div className="mx-12">
            <h2 className="md:text-4xl text-3xl font-bold mt-12 md:mt-12 py-8">
              GET IN TOUCH
            </h2>
            <p className=" text-xl my-6">
              Your Email Address Will Not Be Published. Required Fields are
              Remarked*
            </p>
          </div>
          <div className="flex justify-center md:gap-24 flex-wrap md:flex-nowrap md:m-12">
            <div className=" bg-[rgba(0,0,0,0.5)] border-4 border-[#7c009b59] rounded-xl mx-8 md:mx-0 relative z-50 mt-24 md:mt-0">
              <div className="p-12">
                <div className="flex gap-5 flex-wrap md:flex-nowrap">
                  <div className="m-5">
                    <label for="firstName" className="text-[#7D009B] px-2 ">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="bg-[rgba(225,225,225,0.2)] border-[#7D009B] border rounded p-2 w-full my-2"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="m-5">
                    <label for="lastName" className="text-[#7D009B] px-2 ">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="bg-[rgba(225,225,225,0.2)] border-[#7D009B] border rounded p-2 w-full my-2"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="m-5">
                  <label for="email" className="text-[#7D009B] px-2 ">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="bg-[rgba(225,225,225,0.2)] border-[#7D009B] border rounded p-2 w-full my-2"
                    placeholder="Your Email"
                  />
                </div>
                <div className="m-5">
                  <label for="message" className="text-[#7D009B] px-2 ">
                    Message
                  </label>
                  <input
                    type="textfield"
                    id="message"
                    name="message"
                    className="bg-[rgba(225,225,225,0.2)] border-[#7D009B] border rounded p-2 w-full my-2"
                  />
                </div>
                <div>
                  <button className=" self-start text-xl bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_100%)] text-white px-6 py-3 rounded-[10px] hover:shadow-[0_0_5px_3px_white] transition-all border shadow-[0_0_5px_2px_rgba(255,255,255,0.5)] m-auto block">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center bg-[rgba(0,0,0,0.5)] border-4 border-[#7c009b59] rounded-xl mx-8 md:mx-0 relative z-50 mt-24 md:mt-0">
              <div >
                <h3 className="text-[#7D009B] underline py-2 mx-5 font-bold text-3xl">
                  Contact Information
                </h3>
                <div className="flex m-5">
                  <div>
                    <img src={email} alt="email icon" />
                  </div>
                  <div className="px-5">
                    <p className="text-[#7D009B]">Email:</p>
                    <p>info@supernova-gaming.com</p>
                  </div>
                </div>
                <div className="flex m-5">
                  <div>
                    <img src={phone} alt="email icon" />
                  </div>
                  <div className="px-5">
                    <p className="text-[#7D009B]">Phone Number:</p>
                    <p>+20 15 0393 3933</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
