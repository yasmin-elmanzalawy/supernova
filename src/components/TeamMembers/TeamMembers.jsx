import React from "react";
import blobs from "../../assets/blobs.png";
import abdelrahmanMesbah from "../../assets/AMesbah.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import './TeamMembers.css'

export default function TeamMembers() {
  return (
    <div>
      <div className="bg-[#000000] overflow-hidden pt-24 md:pt-12 text-white">
        <div
          style={{ backgroundImage: `url(${blobs})` }}
          className="bg-cover flex flex-col"
        >
          <div className="z-50">
            <Navbar />
          </div>
          <div className="md:flex justify-center items-center px-5 md:px-32 md:py-12">
            <div className="ceoimage m-5 md:w-[30%] ">
              <img
                className="rounded-xl rounded"
                src={abdelrahmanMesbah}
                alt="Ceo Image w-full"
              />
            </div>
            <div className="words md:text-xl md:w-[70%] md:px-12">
               <span className="font-bold md:text-2xl text-xl">Hi, and thanks for stopping by.</span> <br /> <br /> Supernova Gaming started as
              a small idea — just a few of us who loved esports and believed we
              could do something different.<br></br> We weren’t backed by big
              budgets or big names. Just passion, community, and the belief that
              great things can happen when people who care come together...
          <Link to="/teams">
            {" "}
            <div className="flex justify-center mt-14">
              <button className="inline-block md:text-xl bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_100%)] text-white px-6 py-3 rounded-[10px] hover:shadow-[0_0_5px_3px_white] transition-all border shadow-[0_0_5px_2px_rgba(255,255,255,0.5)] ">
                Know More
              </button>
            </div>
          </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import team from "../../assets/team.png";
// import blobs from "../../assets/blobs.png";
// import union from "../../assets/Union.png";
// import stars from "../../assets/stars.png";
// import abdelrahmanMesbah from "../../assets/AMesbah.png";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

// const teamData = [
//   {
//     name: "Shady Yasser",
//     nickname: "Kaneki",
//     role: "CO-Founder & COO",
//     desc: `Kaneki has 6+ years of experience in the gaming community, serving as a
// Community Manager & Head of Admins. As COO, he oversees
// operations and strategy, driving growth and ensuring a seamless
// community experience.`,
//   },
//   {
//     name: "Abdelrahman Mesbah",
//     nickname: "Ekkos Paradox",
//     role: "Founder",
//     desc: `Paradox brings over 7 years of experience in
// the esports and gaming industry as an
// Esports Operations Manager. He has led
// loads of teams to optimize overall operations
// while actively contributing to the growth and
// engagement of our clients communities.`,
//   },
//   {
//     name: "Abdelrahman Mohsen",
//     nickname: "BAW.D",
//     role: "Creative Director",
//     desc: `BAW.D has 8+ years of experience in the gaming industry, has excelled as a Creative
// Director, Voice Over Artist, and Script Writer. He leads our creative projects,
// crafting engaging narratives and bringing characters to life through voice and
// storytelling.`,
//   },
// ];

// export default function Teams() {
//   const cardStyles = {
//     width: "350px",
//     height: "400px",
//     position: "relative",
//     backgroundColor: "black",
//     color: "white",
//     borderRadius: "10px",
//     border: "0.1px solid #a855f7",
//     overflow: "hidden",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2 )",
//     padding: "10px",
//     cursor: "pointer",
//   };

//   const cardBackgroundStyles = {
//     position: "relative",
//     boxShadow: "0 4px 8px #49088B",
//     borderRadius: "15px",
//     height: "100%",
//     width: "100%",
//     padding: "7px",
//   };

//   const innerBorder = {
//     position: "relative",
//     border: "0.5px solid #49088B",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2 )",
//     borderRadius: "15px",
//     height: "100%",
//     width: "100%",
//     padding: "10px",
//   };

//   const starsStyles = {
//     position: "absolute",
//     top: "0",
//     left: "0",
//     width: "100%",
//     zIndex: 1,
//   };

//   const teamStyles = {
//     position: "absolute",
//     width: "250px",
//     top: "35%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     zIndex: 2,
//   };

//   const unionStyles = {
//     position: "absolute",
//     bottom: "0%",
//     left: "0",
//     right: "0",
//     zIndex: 3,
//     width: "100%",
//     height: "35%",
//   };

//   const memberInfoStyles = {
//     position: "absolute",
//     top: "60%",
//     left: "50%",
//     transform: "translateX(-50%)",
//     textAlign: "center",
//     zIndex: 4,
//   };

//   const memberNameStyles = {
//     fontSize: "23px",
//     fontWeight: "700",
//     margin: "0",
//   };

//   const nickname = {
//     fontSize: "20px",
//     fontWeight: "800",
//     background: "linear-gradient(to bottom, grey, white)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     backgroundClip: "text",
//     color: "transparent",
//     marginTop: "5px",
//   };

//   const memberDescStyles = {
//     fontSize: "18px",
//     color: "#c9c9c9",
//     margin: "5px",
//   };

//   const descOverlayStyles = {
//     position: "absolute",
//     top: "100%", // start hidden below
//     left: 0,
//     textAlign: "center",
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.8)",
//     color: "white",
//     padding: "30px",
//     boxSizing: "border-box",
//     borderRadius: "10px",
//     overflowY: "auto",
//     transition: "top 0.4s ease",
//     zIndex: 10,
//     fontSize: "16px",
//     lineHeight: "1.4",
//     display: "flex",
//     alignItems: "center",
//   };

//   const descOverlayVisible = {
//     top: 0,
//   };

//   const [hoveredIndex, setHoveredIndex] = React.useState(null);

//   return (
//     <div>
//       <div className="bg-[#000000] overflow-hidden text-white  pt-24 md:pt-36">
//         <div
//           style={{ backgroundImage: `url(${blobs})` }}
//           className="bg-cover flex flex-col "
//         >
//           <div className="z-50">
//             <Navbar />
//           </div>
//           <div className="text-center my-5">
//             <h4 className="md:text-5xl text-3xl m-5">
//               Welcome to supernova team
//             </h4>
//             <p className="md:text-xl text-xl my-5">
//               Meet the team that creates the <span>Magic</span>{" "}
//             </p>
//           </div>
//           <div
//             className="mt-5 mb-20"
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               gap: "20px",
//               flexWrap: "wrap",
//             }}
//           >
//             {teamData.map((member, index) => (
//               <div
//                 key={index}
//                 style={cardStyles}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <div style={cardBackgroundStyles}>
//                   <div style={innerBorder}>
//                     <img src={stars} alt="Stars" style={starsStyles} />
//                     <img
//                       src={
//                         member.name === "Abdelrahman Mesbah"
//                           ? abdelrahmanMesbah
//                           : team
//                       }
//                       alt={member.nickname}
//                       style={teamStyles}
//                       className="rounded-xl absolute inset-0 mt-10 "
//                     />

//                     <img src={union} alt="Union" style={unionStyles} />
//                   </div>
//                 </div>
//                 <div style={memberInfoStyles} className=" bg-black/70 shadow-lg backdrop-blur-sm">
//                   <h3 style={memberNameStyles}>{member.name}</h3>
//                   <p style={nickname}>“{member.nickname}”</p>
//                   <p style={memberDescStyles}>{member.role}</p>
//                 </div>
//                 <div cl
//                   style={{
//                     ...descOverlayStyles,
//                     ...(hoveredIndex === index ? descOverlayVisible : {}),
//                   }}
//                 >
//                   {member.desc}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div>
//         <Footer></Footer>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import team from "../../assets/team.png";
// import union from "../../assets/Union.png";
// import stars from "../../assets/stars.png";
// import abdelrahmanMesbah from "../../assets/AMesbah.png";

// export default function TeamMembers() {
//   const cardStyles = {
//     width: "350px",
//     height: "400px",
//     position: "relative",
//     backgroundColor: "black",
//     color: "white",
//     borderRadius: "10px",
//     border: "0.1px solid #a855f7",
//     overflow: "hidden",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2 )",
//     padding: "10px",
//   };

//   const cardBackgroundStyles = {
//     position: "relative",
//     boxShadow: "0 4px 8px #49088B",
//     borderRadius: "15px",
//     height: "100%",
//     width: "100%",
//     padding: "7px",
//   };

//   const innerBorder = {
//     position: "relative",
//     border: "0.5px solid #49088B",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2 )",

//     borderRadius: "15px",
//     height: "100%",
//     width: "100%",
//     padding:"10px",
//   };

//   const starsStyles = {
//     position: "absolute",
//     top: "0",
//     left: "0",
//     width: "100%",
//     zIndex: 1,
//   };

//   const teamStyles = {
//     position: "absolute",
//     width: "250px",
//     top: "35%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     zIndex: 2,
//   };

//   const unionStyles = {
//     position: "absolute",
//     bottom: "0%",
//     left: "0",
//     right: "0",
//     zIndex: 3,
//     width: "100%",
//     height: "35%",
//   };

//   const memberInfoStyles = {
//     position: "absolute",
//     top: "60%",
//     left: "50%",
//     transform: "translateX(-50%)",
//     textAlign: "center",
//   };

//   const memberNameStyles = {
//     fontSize:'23px',
//     fontWeight:'700',
//     margin: "0",
//   };

//   const nickname = {
//     fontSize: "20px",
//     fontWeight:'800',
//     background: 'linear-gradient(to bottom, grey, white)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     backgroundClip: 'text',
//     color: 'transparent',
//     marginTop: "5px",
//   };

//   const memberDescStyles = {
//     fontSize: "18px",
//     color:'#c9c9c9',
//     margin: "5px",
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "20px",
//         flexWrap: "wrap",
//       }}
//     >
//       <div style={cardStyles}>
//         <div style={cardBackgroundStyles}>
//           <div style={innerBorder}>
//             <img src={stars} alt="Stars" style={starsStyles} />
//             <img src={team} alt="Team" style={teamStyles} />
//             <img src={union} alt="Union" style={unionStyles} />
//           </div>
//         </div>
//         <div style={memberInfoStyles}>
//           <h3 style={memberNameStyles}>Shady Yasser </h3>
//           <p style={nickname}>“Kaneki”</p>
//           <p style={memberDescStyles}>
//           CO-Founder & COO
//           </p>
//         </div>
//       </div>
//       <div style={cardStyles}>
//         <div style={cardBackgroundStyles}>
//         <div style={innerBorder}>
//           <img src={stars} alt="Stars" style={starsStyles} />
//           <img src={abdelrahmanMesbah} className="rounded-xl absolute inset-0 mt-5" alt="Team" style={teamStyles} />
//           <img src={union} alt="Union" style={unionStyles} />
//         </div>
//         </div>
//         <div style={memberInfoStyles}  className=" bg-black/70 shadow-lg backdrop-blur-sm z-50">
//           <h3 style={memberNameStyles}>Abdelrahman Mesbah </h3>
//           <p style={nickname}>“Ekkos Paradox”</p>
//           <p style={memberDescStyles}>
//           Founder
//           </p>
//         </div>
//       </div>
//       <div style={cardStyles}>
//         <div style={cardBackgroundStyles}>
//         <div style={innerBorder}>
//           <img src={stars} alt="Stars" style={starsStyles} />
//           <img src={team} alt="Team" style={teamStyles} />
//           <img src={union} alt="Union" style={unionStyles} />
//         </div>
//         </div>
//         <div style={memberInfoStyles}>
//           <h3 style={memberNameStyles}>Abdelrahman Mohsen</h3>
//           <p style={nickname}>“BAW.D”</p>
//           <p style={memberDescStyles}>
//           Creative Director
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
