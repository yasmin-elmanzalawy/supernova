import React from 'react';
import gb from '../../assets/gb.png';
import playhera from '../../assets/playhera.png';
import frenzy from '../../assets/frenzy.png';
import games from '../../assets/games.png';
import arena from '../../assets/arena.png';
import esportsga from '../../assets/esportsga.png';
import tealflamingo from '../../assets/tealflamingo.png';
import "./ClientCarousel.css"

const images = [gb, playhera, frenzy, games, arena, esportsga, tealflamingo];

export default function ClientCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {/* Render the images multiple times to create the infinite rotation loop */}
        {[...images, ...images].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`client-${index}`}
            className="carousel-image"
          />
        ))}
      </div>
    </div>
  );
}
