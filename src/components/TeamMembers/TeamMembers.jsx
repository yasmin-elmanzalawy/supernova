import React from 'react';
import team from "../../assets/team.png";
import union from "../../assets/Union.png";
import stars from "../../assets/stars.png";

export default function TeamMembers() {
  const cardStyles = {
    width: '350px',
    height: '400px',
    position: 'relative',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '10px',
    border:'0.5px solid #a855f7',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2 )',
    padding: '10px',
};

const cardBackgroundStyles = {
    position: 'relative',
    boxShadow: '0 4px 8px #49088B',
    borderRadius: '15px',
    height: '100%',
    width: '100%',
  };

  const starsStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    zIndex: 1,
  };

  const teamStyles = {
    position: 'absolute',
    width:'250px',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
  };

  const unionStyles = {
    position: 'absolute',
    bottom: '0%',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 3,
    width: '100%',
  };

  const memberInfoStyles = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
  };

  const memberNameStyles = {
    margin: '0',
    fontSize: '18px',
  };

  const memberDescStyles = {
    fontSize: '14px',
    marginTop: '5px',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
      <div style={cardStyles}>
        <div style={cardBackgroundStyles}>
          <img src={stars} alt="Stars" style={starsStyles} />
          <img src={team} alt="Team" style={teamStyles} />
          <img src={union} alt="Union" style={unionStyles} />
        </div>
        <div style={memberInfoStyles}>
          <h3 style={memberNameStyles}>John Doe</h3>
          <p style={memberDescStyles}>Frontend Developer with expertise in React and UI design.</p>
        </div>
      </div>
      <div style={cardStyles}>
        <div style={cardBackgroundStyles}>
          <img src={stars} alt="Stars" style={starsStyles} />
          <img src={team} alt="Team" style={teamStyles} />
          <img src={union} alt="Union" style={unionStyles} />
        </div>
        <div style={memberInfoStyles}>
          <h3 style={memberNameStyles}>John Doe</h3>
          <p style={memberDescStyles}>Frontend Developer with expertise in React and UI design.</p>
        </div>
      </div>
      <div style={cardStyles}>
        <div style={cardBackgroundStyles}>
          <img src={stars} alt="Stars" style={starsStyles} />
          <img src={team} alt="Team" style={teamStyles} />
          <img src={union} alt="Union" style={unionStyles} />
        </div>
        <div style={memberInfoStyles}>
          <h3 style={memberNameStyles}>John Doe</h3>
          <p style={memberDescStyles}>Frontend Developer with expertise in React and UI design.</p>
        </div>
      </div>
    </div>
  );
}
