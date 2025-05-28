import React from "react";
import team from "../../assets/team.png";
import union from "../../assets/Union.png";
import stars from "../../assets/stars.png";
import abdelrahmanMesbah from "../../assets/AMesbah.png";


export default function TeamMembers() {
  const cardStyles = {
    width: "350px",
    height: "400px",
    position: "relative",
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px",
    border: "0.1px solid #a855f7",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2 )",
    padding: "10px",
  };

  const cardBackgroundStyles = {
    position: "relative",
    boxShadow: "0 4px 8px #49088B",
    borderRadius: "15px",
    height: "100%",
    width: "100%",
    padding: "7px",
  };

  const innerBorder = {
    position: "relative",
    border: "0.5px solid #49088B",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2 )",

    borderRadius: "15px",
    height: "100%",
    width: "100%",
    padding:"10px",
  };

  const starsStyles = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: 1,
  };

  const teamStyles = {
    position: "absolute",
    width: "250px",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
  };

  const unionStyles = {
    position: "absolute",
    bottom: "0%",
    left: "0",
    right: "0",
    zIndex: 3,
    width: "100%",
    height: "35%",
  };

  const memberInfoStyles = {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  };

  const memberNameStyles = {
    fontSize:'23px',
    fontWeight:'700',
    margin: "0",
  };

  const nickname = {
    fontSize: "20px",
    fontWeight:'800',
    background: 'linear-gradient(to bottom, grey, white)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    marginTop: "5px",
  };

  const memberDescStyles = {
    fontSize: "18px",
    color:'#c9c9c9',
    margin: "5px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <div style={cardStyles}>
        <div style={cardBackgroundStyles}>
          <div style={innerBorder}>
            <img src={stars} alt="Stars" style={starsStyles} />
            <img src={team} alt="Team" style={teamStyles} />
            <img src={union} alt="Union" style={unionStyles} />
          </div>
        </div>
        <div style={memberInfoStyles}>
          <h3 style={memberNameStyles}>Shady Yasser </h3>
          <p style={nickname}>“Kaneki”</p>
          <p style={memberDescStyles}>
          CO-Founder & COO
          </p>
        </div>
      </div>
      <div style={cardStyles}>
        <div style={cardBackgroundStyles}>
        <div style={innerBorder}>
          <img src={stars} alt="Stars" style={starsStyles} />
          <img src={abdelrahmanMesbah} className="rounded-xl absolute inset-0 mt-5" alt="Team" style={teamStyles} />
          <img src={union} alt="Union" style={unionStyles} />
        </div>
        </div>
        <div style={memberInfoStyles}  className=" bg-black/70 shadow-lg backdrop-blur-sm z-50">
          <h3 style={memberNameStyles}>Abdelrahman Mesbah </h3>
          <p style={nickname}>“Ekkos Paradox”</p>
          <p style={memberDescStyles}>
          Founder
          </p>
        </div>
      </div>
      <div style={cardStyles}>
        <div style={cardBackgroundStyles}>
        <div style={innerBorder}>
          <img src={stars} alt="Stars" style={starsStyles} />
          <img src={team} alt="Team" style={teamStyles} />
          <img src={union} alt="Union" style={unionStyles} />
        </div>
        </div>
        <div style={memberInfoStyles}>
          <h3 style={memberNameStyles}>Abdelrahman Mohsen</h3>
          <p style={nickname}>“BAW.D”</p>
          <p style={memberDescStyles}>
          Creative Director
          </p>
        </div>
      </div>
    </div>
  );
}
