import React from "react";
import blobs from "../../assets/blobs.png";
import ClientCarousel from "../ClientCarousel/ClientCarousel";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Planet from "../Planet/Planet";


export default function Client() {
  return (
    <div>
      <div className="bg-[#000000] overflow-hidden text-white">
        <div
          style={{ backgroundImage: `url(${blobs})` }}
          className="bg-cover flex flex-col"
        >
          {" "}
          <div className="z-50">
            <Navbar />
          </div>
          <h2 className="text-center text-4xl font-bold mt-12 md:mt-12 py-8">
            Our Clients
          </h2>
          <p className="text-center text-xl my-6">
            Step into the world of Supernova Games—where innovation meets
            adventure
          </p>
          <div className="my-12">
            <ClientCarousel></ClientCarousel>
          </div>
          <div className="my-24 ">
            <p className="text-center my-5 text-xl md:text-3xl font-extrabold">Partner with Supernova Gaming for Unforgettable Activations</p>
            <p className="text-center text-xl my-6">Let's create unforgettable esports experiences together. 
              <br />Whether you're a brand, agency, or event organizer — we're ready to level up your engagement.</p>
          </div>
          <div className="md:py-0 py-24"><Planet></Planet></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
