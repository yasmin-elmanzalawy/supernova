import React from "react";
import bg from "../../assets/gamesbg.png";
import blobs from "../../assets/blobs.png";
import banner from "../../assets/banner.png";
import pubg from "../../assets/pubg.png";
import colab from "../../assets/colab.png";
import bomb from "../../assets/bomb.png";
import players from "../../assets/players.png";
import bracket from "../../assets/bracket.png";
import community from "../../assets/community.png";
import highlight from "../../assets/highlight.png";
import table from "../../assets/table.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Arena.css";

export default function Arena() {
  return (
    <div>
      <div className="bg-black ">
        <div
          style={{ backgroundImage: `url(${blobs})` }}
          className="bg-cover min-h-screen flex flex-col"
        >
          <div className="z-50 relative pt-4 px-6">
            <Navbar />
          </div>
          <div>
            <p className="text-center md:px-64 px-12 pt-5 text-2xl md:text-4xl relative font-bold text-[#5A3392]">
              Uniting Gamers, Elevating Competition
            </p>
            <p className="text-center text-white py-12 px-12 md:text-xl">
              Supernova Gaming partnered with Arena Esports to create an
              electrifying PUBG Mobile tournament, bringing players together and
              delivering an unforgettable eSports experience.
            </p>
          </div>
          <div className="text-white">
            <div>
              <div className="md:flex  gap-5 items-center">
                <div className="md:w-[50%] relative flex justify-center items-center overflow-hidden">
                  {/* bombs Behind */}
                  <img
                    src={bomb}
                    className="bomb-animate bomb-1 top-[30%] left-[8%] md:left-[20%] "
                    alt="bomb 1"
                  />
                  <img
                    src={bomb}
                    className="bomb-animate bomb-2 left-[80%] top-[65%]"
                    alt="bomb 2"
                  />
                  <img
                    src={bomb}
                    className="bomb-animate bomb-3 left-[70%] top-[20%]"
                    alt="bomb 3"
                  />

                  {/* pubg Image */}
                  <img
                    src={pubg}
                    className="w-[300px] relative"
                    alt="356 games on a mobile screen"
                  />
                </div>
                <div className="md:w-[50%] ">
                  <div>
                    <div className="flex gap-5 my-7 ms-5 me-12 items-start md:items-center">
                      <div className="ms-3 me-4 md:w-32 w-[300px]">
                        <img
                          src={colab}
                          className=" w-[full] md:w-[90px]"
                          alt="trophy icon"
                        />
                      </div>
                      <div className="">
                        <h3
                          className="text-2xl md:text-2xl font-normal z-50 relative text-white "
                          style={{
                            WebkitTextStroke: "1px #5A3392", // Purple outline
                            textShadow: "0 0 5px rgba(0, 0, 0, 0.7)", // Optional shadow for a subtle effect
                          }}
                        >
                          Bringing the Community Together
                        </h3>
                        <p>
                          When Arena Esports approached us, they had a vision:
                          to create an exciting PUBG Mobile tournament that
                          would energize the gaming community and showcase their
                          brand. At Supernova Gaming, we were ready to take on
                          the challenge. With our expertise in operations,
                          marketing, and broadcasting, we got to work on
                          crafting an unforgettable event.
                        </p>
                      </div>
                    </div>
                    <div className=" max-w-[400px] m-auto  py-5">
                      <img
                        className="block w-full"
                        src={community}
                        alt="winner team focus"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex">
              <div>
                    <div className=" flex gap-5 my-7 ms-5 me-12 items-start md:items-center">
                      <div className="ms-3 me-4 md:w-32 w-[300px]">
                        <img
                          src={colab}
                          className=" w-[full] md:w-[90px]"
                          alt="trophy icon"
                        />
                      </div>
                      <div className="">
                        <h3
                          className="text-2xl md:text-2xl font-normal z-50 relative text-white "
                          style={{
                            WebkitTextStroke: "1px #5A3392", // Purple outline
                            textShadow: "0 0 5px rgba(0, 0, 0, 0.7)", // Optional shadow for a subtle effect
                          }}
                        >
                          A Thrilling Finale
                        </h3>
                        <p>
                        As the tournament came to an end, the energy was electric. The Arena PUBG Mobile Cup was more than just a competition—it was a celebration of gaming, community, and high-level play. For Arena Esports, it was a chance to strengthen their brand and engage their audience. For us at Supernova Gaming, it was another testament to our ability to create, market, and deliver world-class esports events. This was just one tournament, but it’s moments like these that remind us why we love what we do. Bringing players together, creating unforgettable experiences, and pushing the boundaries of esports
                        </p>
                      </div>
                    </div>
                    <div className=" max-w-[400px] m-auto  py-5">
                      <img
                        className="block w-full"
                        src={highlight}
                        alt="winner team focus"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-5 my-7 ms-5 me-12 items-start md:items-center">
                      <div className="ms-3 me-4 md:w-32 w-[300px]">
                        <img
                          src={colab}
                          className=" w-[full] md:w-[90px]"
                          alt="trophy icon"
                        />
                      </div>
                      <div className="">
                        <h3
                          className="text-2xl md:text-2xl font-normal z-50 relative text-white "
                          style={{
                            WebkitTextStroke: "1px #5A3392", // Purple outline
                            textShadow: "0 0 5px rgba(0, 0, 0, 0.7)", // Optional shadow for a subtle effect
                          }}
                        >
                          Bringing the Action to Life
                        </h3>
                        <p>
                        We didn’t just run the tournament—we made it an immersive experience for players and viewers alike. With custom overlays, real-time updates, and engaging commentary, our broadcast production turned every match into a spectacle. Fans could follow the action seamlessly, enjoying a professional esports viewing experience.
                        </p>
                      </div>
                    </div>
                    <div className=" max-w-[400px] m-auto  py-5">
                      <img
                        className="block w-full"
                        src={table}
                        alt="winner team focus"
                      />
                    </div>
                  </div>    
              </div>
              <div className="md:flex">
              <div>
                    <div className="flex gap-5 my-7 ms-5 me-12 items-start md:items-center">
                      <div className="ms-3 me-4 md:w-32 w-[300px]">
                        <img
                          src={colab}
                          className=" w-[full] md:w-[90px]"
                          alt="trophy icon"
                        />
                      </div>
                      <div className="">
                        <h3
                          className="text-2xl md:text-2xl font-normal z-50 relative text-white "
                          style={{
                            WebkitTextStroke: "1px #5A3392", // Purple outline
                            textShadow: "0 0 5px rgba(0, 0, 0, 0.7)", // Optional shadow for a subtle effect
                          }}
                        >
                          Connecting with Players
                        </h3>
                        <p>
                        We knew that for the tournament to be a success, we had to reach the right audience. Using our deep connections in the gaming community, we launched a targeted marketing campaign that resonated with PUBG Mobile players. Word spread fast, and soon we had 80+ teams ready to compete, bringing together a passionate and competitive crowd.
                        </p>
                      </div>
                    </div>
                    <div className=" max-w-[400px] m-auto  py-5">
                      <img
                        className="block w-full"
                        src={players}
                        alt="winner team focus"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-5 my-7 ms-5 me-12 items-start md:items-center">
                      <div className="ms-3 me-4 md:w-32 w-[300px]">
                        <img
                          src={colab}
                          className=" w-[full] md:w-[90px]"
                          alt="trophy icon"
                        />
                      </div>
                      <div className="">
                        <h3
                          className="text-2xl md:text-2xl font-normal z-50 relative text-white "
                          style={{
                            WebkitTextStroke: "1px #5A3392", // Purple outline
                            textShadow: "0 0 5px rgba(0, 0, 0, 0.7)", // Optional shadow for a subtle effect
                          }}
                        >
                          Running a Smooth Tournament
                        </h3>
                        <p>
                        A great tournament isn’t just about the matches—it’s about the experience. From setting up the format to coordinating matches and ensuring fair play, we made sure everything ran like clockwork. Our team was on top of every detail, making sure players could focus on what they do best: competing.
                        </p>
                      </div>
                    </div>
                    <div className=" max-w-[400px] m-auto  py-5">
                      <img
                        className="block w-full"
                        src={bracket}
                        alt="winner team focus"
                      />
                    </div>
                  </div>    
              </div>
            </div>
          </div>
        
          <div className="text-white text-center py-5 font-bold px-5 rounded-lg border-4 m-7 border-[#7c009b59] md:text-2xl">
            <p>
            That’s what Supernova Gaming is all about..
            </p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
