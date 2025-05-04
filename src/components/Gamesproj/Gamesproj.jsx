import React from "react";
import bg from "../../assets/gamesbg.png";
import blobs from "../../assets/blobs.png";
import banner from "../../assets/banner.png";
import mobile from "../../assets/mobile.png";
import colab from "../../assets/colab.png";
import thndr from "../../assets/thndr.png";
import cube from "../../assets/cube.png";
import bannervid from "../../assets/banner.mp4";
import Navbar from "../Navbar/Navbar";
import "./Gamesproj.css";
import Footer from "../Footer/Footer";

export default function Gamesproj() {
  return (
    <div>
      <div className="bg-black ">
        <div
          style={{ backgroundImage: `url(${blobs})` }}
          className="bg-cover  min-h-screen flex flex-col"
        >
          <div className="z-50 relative pt-4 px-6">
            <Navbar />
          </div>
          <div>
            <p className="text-center md:px-64 px-12 pt-5 text-2xl md:text-4xl relative font-bold   text-[#5A3392]">
              365Games – Bringing Gaming to Life Through Engaging Content
            </p>
          </div>
          <div className="text-white">
            <div>
              <div className="md:flex  gap-5 items-center">
                <div className="md:w-[50%] relative flex justify-center items-center overflow-hidden">
                  {/* Cubes Behind */}
                  <img
                    src={cube}
                    className="cube-animate cube-1 top-[20%] left-[8%] md:left-[20%] "
                    alt="cube 1"
                  />
                  <img
                    src={cube}
                    className="cube-animate cube-2 left-[80%] top-[65%]"
                    alt="cube 2"
                  />
                  <img
                    src={cube}
                    className="cube-animate cube-3 left-[75%] top-[20%]"
                    alt="cube 3"
                  />

                  {/* Mobile Image */}
                  <img
                    src={mobile}
                    className="w-[250px] relative"
                    alt="356 games on a mobile screen"
                  />
                </div>

                <div className="md:w-[50%] ">
                  <div className="flex gap-5 my-7 mx-3 items-start md:items-center">
                    <div className="ms-3 me-4 md:w-24 w-[300px]">
                      <img
                        src={colab}
                        className=" w-full md:w-[80px]"
                        alt="trophy icon"
                      />
                    </div>
                    <div>
                      <h3
                        className="text-2xl md:text-2xl font-normal z-50 relative text-white "
                        style={{
                          WebkitTextStroke: "1px #5A3392", // Purple outline
                          textShadow: "0 0 5px rgba(0, 0, 0, 0.7)", // Optional shadow for a subtle effect
                        }}
                      >
                        A Creative Collaboration Begins
                      </h3>
                      <p>
                        When 365Games reached out to us, they had one goal: to
                        create engaging, high-energy promotional videos that
                        would showcase their platform and captivate their
                        audience on social media. As passionate gamers and
                        content creators, we knew exactly how to bring their
                        vision to life.
                      </p>
                    </div>
                  </div>
                  <div className=" flex gap-5 my-7 mx-3 items-start md:items-center">
                    <div className="md:w-[140px] w-[410px]">
                      <img
                        src={thndr}
                        className="w-full md:w-[120px]"
                        alt="thunder icon"
                      />
                    </div>
                    <div>
                      <h3
                        className="text-2xl md:text-2xl font-normal z-50 relative text-white "
                        style={{
                          WebkitTextStroke: "1px #5A3392", // Purple outline
                          textShadow: "0 0 5px rgba(0, 0, 0, 0.7)", // Optional shadow for a subtle effect
                        }}
                      >
                        From Ideas to Impactful Videos
                      </h3>
                      <p>
                        When 365Games reached out to us, they had one goal: to
                        create engaging, high-energy promotional videos that
                        would showcase their platform and captivate their
                        audience on social media. As passionate gamers and
                        content creators, we knew exactly how to bring their
                        vision to life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex">
                <div className="md:w-[50%] flex gap-5 my-7 mx-3 items-start md:items-center">
                  <div className="md:w-[140px] w-[410px]">
                    <img
                      src={thndr}
                      className="w-full md:w-[120px]"
                      alt="thunder icon"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-2xl md:text-2xl font-normal z-50 relative text-white "
                      style={{
                        WebkitTextStroke: "1px #5A3392", // Purple outline
                        textShadow: "0 0 5px rgba(0, 0, 0, 0.7)", // Optional shadow for a subtle effect
                      }}
                    >
                      Optimized for Social Media Success
                    </h3>
                    <p>
                      In the fast-paced world of social media, grabbing
                      attention is everything. We designed short, engaging, and
                      highly shareable videos that not only looked great but
                      also drove engagement, helping 365Games connect with more
                      players and strengthen their brand presence.
                    </p>
                  </div>
                </div>
                <div className="md:w-[50%] flex gap-5 my-7 mx-3 items-start md:items-center">
                  <div className="md:w-[140px] w-[390px]">
                    <img
                      src={thndr}
                      className="w-full md:w-[110px]"
                      alt="thunder icon"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-2xl md:text-2xl font-normal z-50 relative text-white "
                      style={{
                        WebkitTextStroke: "1px #5A3392", // Purple outline
                        textShadow: "0 0 5px rgba(0, 0, 0, 0.7)", // Optional shadow for a subtle effect
                      }}
                    >
                      A Partnership Built on Creativity
                    </h3>
                    <p>
                      Seeing our videos come to life on their social
                      channels—and the excitement they generated—was incredibly
                      rewarding. Through this collaboration, we helped 365Games
                      tell their story in a way that was fun, authentic, and
                      memorable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[70vw] w-[90vw] m-auto py-12">
            <video
              src={bannervid}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            {/* <img src= {banner} className="w-full block" alt="banner (ايه قنبلة الموسم؟)" /> */}
          </div>
          <div className="text-white text-center py-5 font-bold px-5 rounded-lg border-4 m-7 border-[#7c009b59] md:text-2xl">
            <p>
              At Supernova Gaming, we don’t just create content—we bring gaming
              experiences to life.
            </p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
